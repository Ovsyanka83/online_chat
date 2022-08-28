from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response


class PingViewSet(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        return Response({"ping": "ping"})
