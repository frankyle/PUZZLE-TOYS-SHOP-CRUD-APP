from rest_framework import generics
from .models import Puzzle
from .serializers import PuzzleSerializer

# Puzzles Views
class PuzzleListCreateView(generics.ListCreateAPIView):
    queryset = Puzzle.objects.all()
    serializer_class = PuzzleSerializer

class PuzzleRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Puzzle.objects.all()
    serializer_class = PuzzleSerializer
