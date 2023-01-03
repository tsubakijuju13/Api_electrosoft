from django.core.exceptions import ValidationError
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *



class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
    
    def validate_role(self, value):
        msg_error = "El rol {} no esta definido, las opciones posibles son: Cliente, Gerente, Administrador, Operador"

        if not value.lower() in ['cliente', 'administrador', 'gerente', 'operador']:
            raise ValidationError(msg_error.format(value))
        
        return value.lower()

class RoleSerializerFilter(serializers.Serializer):
    role = serializers.CharField(max_length=20)

    def validate_role(self, value):
        if not value.lower() in ['cliente', 'administrador', 'gerente', 'operador']:
            raise serializers.ValidationError("Ese usuario no existe")
        return value.lower()


class Auth_UserSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=30, allow_null=False, allow_blank=False)
    re_password = serializers.CharField(max_length=30, allow_null=False, allow_blank=False)

    def validate(self, data):
        if data['password'] != data['re_password']:
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden"})
        return data

    def create(self, validated_data):
        obj_usuario = Usuarios.objects.create(**self.context)
        return User.objects.create_user(id=obj_usuario.user_id,
                                        username=self.context['email'],
                                        password=validated_data['password'])

