from rest_framework.routers import DefaultRouter
from .views import UserModelViewSet, AdminView

router = DefaultRouter()
router.register(r'usuarios', UserModelViewSet)
router.register(r'administrador', AdminView)


#Lo mismo que el arreglo de las rutas, solo que lo invoco aquí:
urlpatterns = router.urls