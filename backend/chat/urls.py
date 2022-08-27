from django.urls import path
from .views import MessageApiView

urlpatterns = [
    path('messages/', MessageApiView.as_view())
]
