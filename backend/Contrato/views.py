from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from django.shortcuts import render
from .models import *
from .serializers import *
import requests

class ContratoView(ModelViewSet):
    queryset = Contrato.objects.all()
    serializer_class = ContratoSerializer

    @action(methods=['get'], detail=True, url_path="estado")
    def filter_state_contratos(self, request, pk=None):
        """
        Función para realizar busqueda de los contratos por estados
        url:: http://localhost:8000/contrato/<estado>/estado/
        """
        contrato_query = Contrato.objects.filter(estado_contrato=pk).all()
        contrato_srlzer = self.get_serializer(contrato_query, many=True)

        return Response(contrato_srlzer.data)


    @action(methods=['get'], detail=True, url_path="cliente")
    def filter_client_contratos(self, request, pk=None):
        """
        Función para realizar busqueda de los contratos por estados
        url:: http://localhost:8000/contrato/<id_cliente>/cliente/
        """
        contrato_query = Contrato.objects.filter(id_cliente=pk).all()
        contrato_srlzer = self.get_serializer(contrato_query, many=True)

        return Response(contrato_srlzer.data)

    @action(methods=['get'], detail=False, url_path="coordenadas")
    def localizacion_clientes(self, request):
        """
        Metodo que retorna la dirección, ciudad, departamento de los contratos
        para el componente de geolocalización
        """
        #Prefiero utilizar un enfoque más directo para esto ...
        #sql_statement = '''SELECT c.direccion, c.ciudad, c.departamento FROM Contrato as c JOIN Usuario ON c.id_cliente = Usuario.user_id'''
        sql_statement = '''SELECT c.id_contrato, c.direccion, c.ciudad, c.departamento FROM Contrato as c '''
        contratos = Contrato.objects.raw(sql_statement)

        contrato_srlzer = ContratoLocalizacion(contratos, many=True)

        #Peticion a openmap:
        url_reuest = 'https://nominatim.openstreetmap.org/?street={}&country={}&state={}&country=Colombia&format=json'
        obj_coordenadas = []

        for i in contrato_srlzer.data:
            r = requests.get(url_reuest.format(i["direccion"], i["ciudad"], i["departamento"]))
            r_data = r.json()
            obj_coordenadas.append({'lat': r_data[0]["lat"], 'lon': r_data[0]["lon"]})


        return Response(obj_coordenadas)

    
'''
¿que necesito hacer...?
pues necesito traer probablemente los contratos que estan asociados a cierto cliente
¿para que?.
    para saber que contratos tiene asociados
    pero eso lo puedo hacer en la view del usuario
    vamos para alla...
'''