from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('login/', include('base.api.urls')),
    #path('auth_login/', include('allauth.urls')),
    path('api/', include('modelosApi.routers'))
]
