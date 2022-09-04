from curses.ascii import US
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    model = User
    fields = '__all__'