from rest_framework import serializers
from .models import Flower, Order, OrderItem


class FlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flower
        fields = "__all__"


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ["flower", "quantity"]

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "phone",
            "address",
            "city",
            "country",
            "zip_code",
            "total_price",
            "status",
            "created_at",
            "items",
        ]
        read_only_fields = [
            "total_price",
            "status",
            "created_at",
        ]

    def create(self, validated_data):
        items_data = validated_data.pop("items")

        order = Order.objects.create(**validated_data)

        total = 0

        for item in items_data:
            flower = item["flower"]
            quantity = item["quantity"]

            # Validate quantity
            if quantity <= 0:
                raise serializers.ValidationError(
                    "Quantity must be greater than zero."
                )

            # Check stock
            if flower.stock < quantity:
                raise serializers.ValidationError(
                    f"Not enough stock for '{flower.name}'."
                )

            # Create order item
            OrderItem.objects.create(
                order=order,
                flower=flower,
                quantity=quantity,
                price=flower.price,
            )

            # Reduce stock
            flower.stock -= quantity
            flower.save()

            total += flower.price * quantity

        order.total_price = total
        order.save()

        return order