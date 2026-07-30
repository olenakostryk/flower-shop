from rest_framework import generics
from .models import Flower
from .serializers import FlowerSerializer


class FlowerListAPIView(generics.ListAPIView):
    serializer_class = FlowerSerializer

    def get_queryset(self):
        queryset = Flower.objects.all()

        featured = self.request.query_params.get("featured")
        category = self.request.query_params.get("category")
        sale = self.request.query_params.get("sale")
        search = self.request.query_params.get("search")
        ordering = self.request.query_params.get("ordering")

        if featured == "true":
            queryset = queryset.filter(featured=True)

        if sale == "true":
            queryset = queryset.filter(sale=True)

        if category:
            queryset = queryset.filter(category=category)

        if search:
            queryset = queryset.filter(name__icontains=search)

        if ordering:
            queryset = queryset.order_by(ordering)

        return queryset


class FlowerDetailAPIView(generics.RetrieveAPIView):
    queryset = Flower.objects.all()
    serializer_class = FlowerSerializer
    lookup_field = "slug"