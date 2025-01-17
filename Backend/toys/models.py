from django.db import models
from django.utils import timezone

class ToyCategory(models.TextChoices):
    EDUCATIONAL = 'Educational', 'Educational'
    ACTION = 'Action', 'Action'
    PUZZLE = 'Puzzle', 'Puzzle'
    PLUSH = 'Plush', 'Plush'
    FOR_FUN = 'For Fun', 'For Fun'
    CREATIVE = 'Creative', 'Creative'
    OTHER = 'Other', 'Other'

def toy_image_path(instance, filename):
    # Upload image to toys/<category>/<filename>
    return f'toys/{instance.category}/{filename}'

class Toy(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=ToyCategory.choices, default=ToyCategory.OTHER)
    age_group = models.CharField(max_length=50, choices=[('0-2 years', '0-2 years'), ('3-5 years', '3-5 years'), ('6-8 years', '6-8 years'), ('9+ years', '9+ years')])
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()    
    sold = models.PositiveIntegerField(default=0)
    rating = models.PositiveSmallIntegerField(default=0)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to=toy_image_path, blank=True, null=True)  # Single image field with custom path
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
