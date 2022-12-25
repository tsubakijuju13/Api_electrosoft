from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('login/', include('base.api.urls')),
    #path('auth_login/', include('allauth.urls')),
    path('api/', include('modelosApi.routers'))
<<<<<<< HEAD
    #path('juju/auth/', include('dj_rest_auth.urls')),
    #path('juju/register/', include('dj_rest_auth.registration.urls')),
]

#urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
=======
]
>>>>>>> origin/frontend-auth
