from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PuzzleViewSet

router = DefaultRouter()
router.register(r'puzzles', PuzzleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
