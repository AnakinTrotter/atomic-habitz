from django.http import JsonResponse
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

def login(request):
    if request.method == 'POST':
        print(request.POST)
        if 'username' in request.POST and 'password' in request.POST:
            user_obj = User.objects.filter(name=request.POST['username'])
            if len(user_obj) > 0 and user_obj[0].password == request.POST['password']:
                return JsonResponse({'id': f'{user_obj[0].id}'})
    return JsonResponse({'error': 'user not found'})
