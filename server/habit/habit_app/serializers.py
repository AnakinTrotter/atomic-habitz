from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id' ,'name', 'desc', 'user_stacks')

class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stack
        fields = ('id' ,'name', 'time', 'user_who_created', 'stacked_habits')

class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = ('id' ,'name', 'stack_part_of')