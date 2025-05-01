from django.db import models
from django.utils import timezone

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateTimeField(default=timezone.now)  # Set default value here
    is_completed = models.BooleanField(default=False)  # Add this field

    def __str__(self):
        return self.title
