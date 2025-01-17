from django.db import models

class Puzzle(models.Model):
    AGE_GROUP_CHOICES = [
        ('under_5', 'Under 5 years'),
        ('under_10', 'Under 10 years'),
        ('under_18', 'Under 18 years'),
        ('above_18', '18 years and above'),
    ]
    
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    sold = models.PositiveIntegerField(default=0)
    pieces = models.PositiveIntegerField()
    age_group = models.CharField(max_length=20, choices=AGE_GROUP_CHOICES)
    rating = models.PositiveSmallIntegerField(default=0)

    def remaining_stock(self):
        return self.stock - self.sold

    def __str__(self):
        return self.name
