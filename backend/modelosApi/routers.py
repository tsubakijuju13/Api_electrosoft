from rest_framework.routers import DefaultRouter, SimpleRouter
from .views import JujuView, UserModelViewSet, AdminView

router = SimpleRouter()
router.register(r'usuarios', UserModelViewSet)
router.register(r'administrador', AdminView)
router.register(r'juju', JujuView)

#Lo mismo que el arreglo de las rutas, solo que lo invoco aquí:
urlpatterns = router.urls