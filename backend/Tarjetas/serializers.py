from dataclasses import fields
from rest_framework import serializers
from .models import *

class Tarjeta_serializer(serializers.ModelSerializer):
    class Meta:
        model = Tarjetas
        fields = '__all__'

class MisTarjetas_serializer(serializers.ModelSerializer):
    class Meta:
        model = MiTarjeta
        fields = '__all__'