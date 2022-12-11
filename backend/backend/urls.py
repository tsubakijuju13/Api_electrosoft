from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('juju/auth/', include('dj_rest_auth.urls')),
    #path('juju/register/', include('dj_rest_auth.registration.urls')),

    path('api/', include('base.api.urls'))
]
