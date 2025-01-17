from django.contrib import admin
from .models import Toy

@admin.register(Toy)
class ToyAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'stock', 'rating', 'updated_at')
    search_fields = ('name', 'category')
    list_filter = ('category', 'age_group', 'rating')
