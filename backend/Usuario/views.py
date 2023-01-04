from multiprocessing import context
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action

from Contrato.serializers import ContratoSerializer, MyContractSerializer
from .serializers import *
from .models import Usuarios


class UsuariosViewSet(ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuarioSerializer

    '''
     @Get: Se realizacon la url http://localhost:8000/usuarios/

     @Get <pk>: permite hacer una consulta solo con la primary key del modelo, esto a traves de 
        http://localhost:8000/usuarios/<pk>/ , donde <pk> se reemplaza por el numero

     @Post: se hace a la ruta http://localhost:8000/usuarios/ mandando como json:
        {
            user_id 
            nombre
            apellido
            role
            identificacion
            direccion
            ciudad
            barrio
            telefono
            email
            password
            re_password
        }

     @Put: Para la actualización necesita todos los campos anteriores del JSON y en la url necesita la <pk>
           del campo que quiere actualizar http://localhost:8000/usuarios/<pk>/, cambiando el algunas de las key 
           del JSON el valor a actualizar

     @Delete: El más dificil, sfrom rest_framework.parsers import JSONParserolo colocar en la url la pk del campo a eliminar y listo 
              http://localhost:8000/usuarios/<pk>/

     NOTA: debido a las limitaciones que trae esta bendición voy a hacer unos cambios necesarios para que 
     podamos hacer cosas más avanzadas, entre otras
    '''


    @action(methods=['get'], detail=False, url_path='role')
    def filter_role(self, request):
        """
        Metodo para filtrar los usuarios por roles
        http: GET
        url endpoint: http://localhost:8000/usuarios/role/
        JSON: {'role': '<any role>'}
        """
        
        role_serializer = RoleSerializerFilter(data= request.data)
        role_serializer.is_valid(raise_exception=True)

        usuarios_filter = Usuarios.objects.filter(role=role_serializer.data['role'])
        usuario_serializer = UsuarioSerializer(usuarios_filter, many=True)

        return Response(usuario_serializer.data)        


    def create(self, request, *args, **kwargs):
        """
        Metodo del end-point para la creación de un usuario
        url: http://localhost:8000/usuarios/
        """
        user_serializer = self.get_serializer(data=request.data)
        if user_serializer.is_valid():
            auth_serializer = Auth_UserSerializer(data=request.data, context=user_serializer.data)
            auth_serializer.is_valid(raise_exception=True)
            auth_serializer.save()
        else:
            return Response(user_serializer.errors)

        return Response({"message": "Se ha realizado el registro"})


        #Forest code: ​32KB3KUSG

    @action(methods=['get'], detail=True, url_path='mis-contratos')
    def get_contratos(self, request, pk=None):
        user_obj = Usuarios.objects.get(pk=pk)
        contrato_srlzer = MyContractSerializer(user_obj.contrato_set.all(), many=True)
        return Response(contrato_srlzer.data)

    @action(methods=['get'], detail=False, url_path='auth_info')
    def get_user_state(self, request):
        user_query = User.objects.all()
        user_serializer = State_Serializer(user_query, many=True)
        return Response(user_serializer.data)

    @action(methods=['get'], detail=False, url_path='user_info')
    def get_all_users_info(self, request):
        raw_sql = '''
            SELECT * FROM Usuarios JOIN auth_user ON Usuarios.user_id = auth_user.id
        '''

        users = Usuarios.objects.raw(raw_sql)
        user_serializer = User_Info_Serializer(users, many=True)
        
        return Response(user_serializer.data)