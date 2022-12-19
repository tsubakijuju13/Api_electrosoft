from rest_framework.routers import DefaultRouter
from .views import UserModelViewSet, AdminView

router = DefaultRouter()
router.register(r'usuarios', UserModelViewSet)
router.register(r'administrador', AdminView)
