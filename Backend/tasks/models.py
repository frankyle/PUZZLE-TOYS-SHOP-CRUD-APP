from django.db import models

class Task(models.Model):
    PRIORITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    due_date = models.DateField()
    priority = models.CharField(max_length=6, choices=PRIORITY_CHOICES)

    def __str__(self):
        return self.title
