from django.contrib import admin
from .models import Flower, Order, OrderItem

from django.contrib import admin
from .models import Flower, Order, OrderItem


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "first_name",
        "last_name",
        "email",
        "total_price",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "created_at",
    )

    search_fields = (
        "first_name",
        "last_name",
        "email",
    )

    inlines = [OrderItemInline]


@admin.register(Flower)
class FlowerAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "price",
        "stock",
        "featured",
    )

    list_filter = (
        "category",
        "featured",
    )

    search_fields = ("name",)


admin.site.register(OrderItem)
admin.site.register(OrderItem)

@admin.register(Flower)
class FlowerAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "price",
        "featured",
        "sale",
        "stock",
    )

    list_filter = (
        "category",
        "featured",
        "sale",
    )

    search_fields = (
        "name",
        "description",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }
    
    