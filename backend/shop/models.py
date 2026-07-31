from django.db import models


class Flower(models.Model):
    CATEGORY_CHOICES = [
        ("Roses", "Roses"),
        ("Tulips", "Tulips"),
        ("Lilies", "Lilies"),
        ("Orchids", "Orchids"),
        ("Peonies", "Peonies"),
        ("Sunflowers", "Sunflowers"),
        ("Bouquets", "Bouquets"),
    ]

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
    )

    occasion = models.CharField(
        max_length=100,
        blank=True,
    )

    description = models.TextField()

    image = models.ImageField(
        upload_to="flowers/"
    )

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2,
    )

    old_price = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        null=True,
        blank=True,
    )

    rating = models.DecimalField(
        max_digits=2,
        decimal_places=1,
        default=5.0,
    )

    reviews = models.PositiveIntegerField(default=0)

    featured = models.BooleanField(default=False)
    sale = models.BooleanField(default=False)

    stock = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.name
    
    
class Order(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Processing", "Processing"),
        ("Completed", "Completed"),
        ("Cancelled", "Cancelled"),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    email = models.EmailField()

    phone = models.CharField(max_length=20)

    address = models.CharField(max_length=255)

    city = models.CharField(max_length=100)

    country = models.CharField(max_length=100)

    zip_code = models.CharField(max_length=20)

    total_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending",
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id}"
    
    
class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name="items",
    )

    flower = models.ForeignKey(
        Flower,
        on_delete=models.CASCADE,
    )

    quantity = models.PositiveIntegerField(default=1)

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2,
    )

    def __str__(self):
        return f"{self.flower.name} x {self.quantity}"