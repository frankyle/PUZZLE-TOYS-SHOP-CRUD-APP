from django.urls import path
from .views import PuzzleListCreateView, PuzzleRetrieveUpdateDestroyView

urlpatterns = [
    path('puzzles/', PuzzleListCreateView.as_view(), name='puzzle-list-create'),
    path('puzzles/<int:pk>/', PuzzleRetrieveUpdateDestroyView.as_view(), name='puzzle-detail'),
]
