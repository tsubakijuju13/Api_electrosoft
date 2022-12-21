from rest_framework.routers import DefaultRouter
from .views import UserModelViewSet, AdminView

router = DefaultRouter()
router.register(r'usuarios', UserModelViewSet, basename="usuarios_basename")
router.register(r'administrador', AdminView)


urlpatterns = router.urls