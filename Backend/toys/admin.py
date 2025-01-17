from django.contrib import admin
from django.utils.html import mark_safe  # For rendering HTML safely
from .models import Toy

class ToyAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'age_group', 'price', 'stock', 'sold', 'rating', 'created_at', 'updated_at', 'image_preview')
    list_filter = ('category', 'age_group', 'created_at')
    search_fields = ('name', 'category', 'description')
    readonly_fields = ('created_at', 'updated_at')
    
    # Show the image directly in the list view (render image as a thumbnail)
    def image_preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="100" />')  # Safe rendering of the image
        return "No Image"
    
    image_preview.short_description = 'Image'

    # Organize the form fields in a nice way
    fieldsets = (
        (None, {
            'fields': ('name', 'category', 'age_group', 'price', 'stock', 'sold', 'description', 'image', 'rating')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
        }),
    )

# Register the Toy model with the customized admin
admin.site.register(Toy, ToyAdmin)
