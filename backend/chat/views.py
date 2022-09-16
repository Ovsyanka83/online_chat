from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User


class ChatViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
