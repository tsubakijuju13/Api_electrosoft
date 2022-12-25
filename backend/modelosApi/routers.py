from rest_framework.routers import DefaultRouter
from .views import UserModelViewSet, AdminView

router = DefaultRouter()
router.register(r'usuarios', UserModelViewSet, basename="usuarios_basename")
router.register(r'administrador', AdminView)


<<<<<<< HEAD
=======
#Lo mismo que el arreglo de las rutas, solo que lo invoco aquí:
>>>>>>> origin/frontend-auth
urlpatterns = router.urls