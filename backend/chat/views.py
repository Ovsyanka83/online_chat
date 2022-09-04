from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import UserSerializer

class CreateUserAPI(viewsets.ModelViewSet):
    serializer_class = UserSerializer
