from django.db import models

class Toy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    sold = models.PositiveIntegerField(default=0)
    rating = models.PositiveSmallIntegerField(default=0)

    def remaining_stock(self):
        return self.stock - self.sold

    def __str__(self):
        return self.name
