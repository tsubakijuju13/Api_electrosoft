from django.urls import path
from .views import ViewUser, Saitama
from .routers import router

urlpatterns = [
    path('users/', ViewUser.as_view(), name='user_lista'),
    path('users/<int:id>', ViewUser.as_view(), name='get_from_param'),
    path('saitama/', Saitama.as_view(), name='xdddddd'),
]

urlpatterns += router.urls