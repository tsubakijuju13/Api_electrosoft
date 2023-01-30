from django.db import models
from Usuario.models import Usuarios
from django.core.exceptions import ValidationError

def validar_numero_tarjeta(v):
    if len(v) < 12:
        raise ValidationError('%(v)s no es un numero de tarjeta valido, muy corto')

class Tarjetas(models.Model):
    id_tarjeta = models.BigAutoField(primary_key=True)
    numero_tarjeta = models.CharField(max_length=13, validators=[validar_numero_tarjeta], null=False, unique=True)
    fecha_vencimiento = models.DateField(null=False, blank=False)
    cvv = models.CharField(null=False, blank=False, max_length=3)
    password = models.CharField(max_length=20, null=False, blank=False)
    banco = models.CharField(max_length=14, blank=False, null=False)

    class Meta:
        db_table = "Tarjetas"
    
    def __str__(self):
        return '%d %s' % (self.id_tarjeta, self.numero_tarjeta)


class Tarjeta_debito(models.Model):
    num_tarjeta = models.ForeignKey('Tarjetas', unique=True, on_delete=models.CASCADE)
    saldo = models.FloatField(blank=False, null=False)

    class Meta:
        db_table = "Debito"

    def __str__(self):
        return '%s %f' % (self.num_tarjeta, self.saldo)


class Tarjeta_credito(models.Model):
    num_tarjeta = models.ForeignKey('Tarjetas', unique=True, on_delete=models.CASCADE)
    cupo = models.FloatField(blank=False, null=False)

    class Meta:
        db_table = "Credito"

    def __str__(self):
        return '%s %f' % (self.num_tarjeta, self.cupo)

class MiTarjeta(models.Model):
    cliente = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    tarjeta = models.ForeignKey('Tarjetas', unique=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "MisTarjetas"

    def __str__(self):
        return self.tarjeta