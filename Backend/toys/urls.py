from django.urls import path
from .views import ToyListCreateView, ToyRetrieveUpdateDestroyView

urlpatterns = [
    path('toys/', ToyListCreateView.as_view(), name='toy-list-create'),
    path('toys/<int:pk>/', ToyRetrieveUpdateDestroyView.as_view(), name='toy-detail'),
]
