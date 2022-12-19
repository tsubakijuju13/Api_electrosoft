from django.http.response import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import UserSerializer, AdminSerializer
from .models import *
import json

# Create your views here.
class ViewUser(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def message_rest(self, type='get', data={}):
        match type:
            case 'get':
                data_msg = {"message": "Success", "data": data}
                return JsonResponse(data_msg)
            case _:
                return JsonResponse({"error": "Error en la funcionalidad del switch"})

    def get(self, request, id=0):
        if id !=0:
            #Consulta con el filtro del id: -> list
            list_query = list(User.objects.filter(user_id=id).values())
            
            #Retorno de la consulta, tambien llamado response
            return self.message_rest(data=list_query[0]) if len(list_query) > 0 else JsonResponse({"message": "No se ha encontrado el usuario con el id: {}".format(id)})
        else:
            get_users = list(User.objects.values())
            if(len(get_users) > 0):
                data = {"mensaje:": "Success", "users:": get_users}
            else:
                data = {"mensaje:": "No hay datos por listar"}

            return JsonResponse(data)

    def post(self, request):
        rq_body = json.loads(request.body)
        #Voy a crear usuarios
        User.objects.create(email=rq_body['email'], password=rq_body['password'], role=rq_body['role'], active=rq_body['active'])
        datos =  {"mensage: ": "Exito"} 
        return JsonResponse(datos)

    def put(self, request, id):
        if(id > 0):
            req = json.loads(request.body)
            query = User.objects.get(user_id=id)
            query.email = req['email']
            query.role = req['role']
            query.active = req['active']
            query.save()
            data = {"message": "Se han actualizado los datos correctamente"}
        else:
            data = {"message": "No existe el usuario"}
        
        return JsonResponse(data)
        

    def delete(self, request, id):
        query = User.objects.filter(user_id=id).values()

        if len(query) > 0:
            User.objects.filter(user_id=id).delete()
            msg = {"message": "Se ha eliminado el usuario con exito"}
        else:
            msg = {"message": "El usuario no se encuentra registrado"}
        
        return JsonResponse(msg)



#Other viewclass using viewsets
class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AdminView(ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

    @action(detail=True, methods=['get'], url_name='juju')
    def juju(self, request, nom):
        return Response({"key": "kdkjdjkd"})
        '''ee = Admin.objects.filter(nombre=nom)
        ser = self.get_serializer(ee)
        return Response(ser.data)'''