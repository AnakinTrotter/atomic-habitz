from django.db import models

# Create your models here.


class User(models.Model):
    name = models.TextField()
    desc = models.TextField(default="Hi! I like TREES!")
    password = models.TextField()  # bcrypt later lmao


class Stack(models.Model):
    name = models.TextField()
    time = models.TimeField()
    user_who_created = models.ForeignKey(
        User, related_name='user_stacks', on_delete=models.CASCADE)


class Habit(models.Model):
    name = models.TextField()
    stack_part_of = models.ForeignKey(
        Stack, related_name='stacked_habits', on_delete=models.CASCADE)
