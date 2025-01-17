from rest_framework import generics
from .models import Toy
from .serializers import ToySerializer

# Toys Views
class ToyListCreateView(generics.ListCreateAPIView):
    queryset = Toy.objects.all()
    serializer_class = ToySerializer

class ToyRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Toy.objects.all()
    serializer_class = ToySerializer
