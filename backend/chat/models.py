from django.db import models

class User(models.Model):
    nickname = models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.nickname