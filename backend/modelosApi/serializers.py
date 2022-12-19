from rest_framework import serializers
from .models import *
import json

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    '''def to_representation(self, instance):
        return instance.toJSON()'''

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'