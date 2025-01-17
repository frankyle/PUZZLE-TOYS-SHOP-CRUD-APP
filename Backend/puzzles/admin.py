from django.contrib import admin
from django.utils.html import format_html
from .models import Puzzle

class PuzzleAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'difficulty_level', 'pieces_count', 'price', 'stock', 'sold', 'rating', 'created_at', 'updated_at', 'image_preview')
    list_filter = ('category', 'difficulty_level', 'created_at')
    search_fields = ('name', 'category', 'description')
    readonly_fields = ('created_at', 'updated_at')
    
    # Show the image as a thumbnail in the list view
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" />', obj.image.url)
        return "No Image"
    
    image_preview.short_description = 'Image'

    # Display image preview on detail view in the form
    fieldsets = (
        (None, {
            'fields': ('name', 'category', 'difficulty_level', 'pieces_count', 'price', 'stock', 'sold', 'description', 'image', 'rating')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
        }),
    )

# Register your model with the admin site
admin.site.register(Puzzle, PuzzleAdmin)
