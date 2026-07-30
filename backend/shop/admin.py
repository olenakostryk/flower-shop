from django.contrib import admin
from .models import Flower


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