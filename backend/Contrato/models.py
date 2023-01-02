from django.db import models
from django.utils import timezone

class Contrato(models.Model):
    id_contrato = models.BigAutoField(primary_key=True)
    id_cliente = models.ForeignKey('Usuario.Usuarios', on_delete=models.CASCADE)
    fecha_vinculación = models.DateField(default=timezone.now())
    estado_contrato = models.CharField(max_length=20, default='activo', blank=False)
    ciudad = models.CharField(max_length=30, default='Cali', blank=False)
    direccion = models.CharField(max_length=40, null=False, blank=False)
    estrato = models.CharField(max_length=10, null=False, blank=False)
    uso = models.CharField(max_length=20, default='Domestico', blank=False)

    class Meta:
        db_table = "Contrato"
    
    def __str__(self):
        return str(self.id_contrato)
