from rest_framework import viewsets
from .models import Puzzle
from .serializers import PuzzleSerializer

class PuzzleViewSet(viewsets.ModelViewSet):
    queryset = Puzzle.objects.all()
    serializer_class = PuzzleSerializer
