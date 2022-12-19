from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Admin)
admin.site.register(Gerente)
admin.site.register(Operador)
admin.site.register(Cliente)
admin.site.register(Contrato)
admin.site.register(Factura)