from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    verification_code = models.CharField(max_length=6, null=True, blank=True)
    
    def __str__(self):
        return self.username
    

