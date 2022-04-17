from django.http import JsonResponse
from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets      
from .models import *
import json

class UserView(viewsets.ModelViewSet):  
    serializer_class = UserSerializer   
    queryset = User.objects.all()

class StackView(viewsets.ModelViewSet):  
    serializer_class = StackSerializer   
    queryset = Stack.objects.all()    

class HabitView(viewsets.ModelViewSet):  
    serializer_class = HabitSerializer   
    queryset = Habit.objects.all()    

def login(request):
    if request.method == 'POST':
        print(request.body)
        post_data = json.loads(request.body.decode('utf-8'))
        print(post_data)
        if 'username' in post_data and 'password' in post_data:
            user_obj = User.objects.filter(name=post_data['username'])
            if len(user_obj) > 0 and user_obj[0].password == post_data['password']:
                return JsonResponse({'id': f'{user_obj[0].id}'})
    return JsonResponse({'error': 'user not found'})
