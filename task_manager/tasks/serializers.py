# tasks/serializers.py
from rest_framework import serializers
from .models import Task

# Task Serializer for serializing task data
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
