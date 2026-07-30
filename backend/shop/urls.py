from django.urls import path
from .views import FlowerListAPIView, FlowerDetailAPIView

urlpatterns = [
    path("flowers/", FlowerListAPIView.as_view(), name="flower-list"),
    path("flowers/<slug:slug>/", FlowerDetailAPIView.as_view(), name="flower-detail"),
]