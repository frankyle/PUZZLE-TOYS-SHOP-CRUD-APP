from django.db import models
from django.utils import timezone

class PuzzleCategory(models.TextChoices):
    ANIMALS = 'Animals', 'Animals'
    ABACUS = 'Abacus', 'Abacus'
    EDUCATIONAL = 'Educational', 'Educational'
    CUSTOM = 'Custom', 'Custom'
    CARTOON = 'Cartoon', 'Cartoon'
    REGIONS = 'Regions', 'Regions'
    OTHER = 'Other', 'Other'

def puzzle_image_path(instance, filename):
    # Upload image to puzzles/<category>/<filename>
    return f'puzzles/{instance.category}/{filename}'

class Puzzle(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=PuzzleCategory.choices, default=PuzzleCategory.OTHER)
    difficulty_level = models.CharField(max_length=50, choices=[('Easy', 'Easy'), ('Medium', 'Medium'), ('Hard', 'Hard')])
    pieces_count = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    sold = models.PositiveIntegerField(default=0)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to=puzzle_image_path, blank=True, null=True)
    rating = models.PositiveSmallIntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

