import email
from email.policy import default
from statistics import mode
from unicodedata import name
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from rest_framework.response import Response

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, last_name, role='Invitado', password=None):
        if not email:
            raise ValueError('Email debe tener un valor')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, last_name=last_name, role=role)
        user.set_password(password)
        user.save()

        res = Response()
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=200, unique=True)
    name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20, default='')
    role = models.CharField(max_length=20, default='Invitado')
    is_active = models.BooleanField(default=True)

    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'last_name']

    def get_name(self):
        return self.name
    
    def __str__(self):
        return self.email

# Create your models here.
