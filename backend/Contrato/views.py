from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from .models import *
from .serializers import *

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

        print(contrato_srlzer.data)

        return Response(contrato_srlzer.data)

    
'''
¿que necesito hacer...?
pues necesito traer probablemente los contratos que estan asociados a cierto cliente
¿para que?.
    para saber que contratos tiene asociados
    pero eso lo puedo hacer en la view del usuario
    vamos para alla...
'''