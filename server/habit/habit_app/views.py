from http.client import HTTPResponse
from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets      
from .models import *    

class UserView(viewsets.ModelViewSet):  
    serializer_class = UserSerializer   
    queryset = User.objects.all()

class StackView(viewsets.ModelViewSet):  
    serializer_class = StackSerializer   
    queryset = Stack.objects.all()    

class HabitView(viewsets.ModelViewSet):  
    serializer_class = HabitSerializer   
    queryset = Habit.objects.all()    
