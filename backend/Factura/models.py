from pyexpat import model
from django.db import models
from django.core.exceptions import ValidationError

def valid_cost_service(value):
    if value <= 0.0:
        raise ValidationError({"message": "El valor debe ser un numero positivo"})

class Factura(models.Model):
    no_factura = models.BigAutoField(primary_key=True)
    codigo_contrato = models.ForeignKey('Contrato.Contrato', on_delete=models.CASCADE)
    fecha_expedicion = models.DateField(auto_now_add=True)
    fecha_vencimiento = models.DateField(null=False, blank=False)
    estado = models.CharField(max_length=20, blank=False, default="En mora")

    class Meta:
        db_table = "Factura"

    def __str__(self):
        return '%s' % (self.no_factura)
    


class DetallesFactura(models.Model):
    factura = models.OneToOneField(Factura, on_delete=models.CASCADE)
    consumo_acueducto = models.FloatField(blank=False, null=False)
    acueducto_lectura_actual = models.CharField(max_length=20, blank=False, null=False)
    acueducto_lectura_anterior = models.CharField(max_length=20, blank=False, default='0.0')
    acueducto_valor_total = models.FloatField(validators=[valid_cost_service], null=False, blank=False)
    alcantarillado_valor_total = models.FloatField(validators=[valid_cost_service], null=False, blank=False)
    consumo_energia = models.FloatField(null=False, blank=False)
    energia_lectura_actual = models.CharField(max_length=20, blank=False, null=False)
    energia_lectura_anterior = models.CharField(max_length=20, blank=False, default='0.0')
    energia_valor_total = models.FloatField(validators=[valid_cost_service], null=False, blank=False)
    lys_valor_total = models.FloatField(validators=[valid_cost_service], null=False, blank=False)
    alumbrado_valor_total = models.FloatField(validators=[valid_cost_service], blank=False)
    pago_total = models.FloatField(null=False, blank=False)

    class Meta:
        db_table = "DetallesFactura"
    
    def __str__(self):
        return '%s %f' % (self.factura, self.pago_total)