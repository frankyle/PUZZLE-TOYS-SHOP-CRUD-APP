from django.contrib import admin
from .models import Puzzle

@admin.register(Puzzle)
class PuzzleAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'stock', 'rating', 'updated_at')
    search_fields = ('name', 'category')
    list_filter = ('category', 'difficulty_level', 'rating')
