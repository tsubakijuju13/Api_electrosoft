from rest_framework.routers import SimpleRouter
from .views import *

router = SimpleRouter()
router.register(r'usuarios', UsuariosViewSet)

urlpatterns = router.urls