from django.db import models
#from django.contrib.auth.models import User

#Modelo de datos para el Usuario
class User(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    email = models.EmailField(max_length=50, null=False)
    password = models.CharField(max_length=20, null=False, blank=False)
    role = models.CharField(max_length=20, null=False)
    active = models.BooleanField(null=False)

    def __str__(self):
        return str(self.user_id)

    class Meta: #Leer https://docs.djangoproject.com/en/4.1/ref/models/options/ para más diversión
        db_table = "Users"
        #ordering = ['-user_id']  

#Modelo de datos para el Administrador
class Admin(models.Model):
    nombre = models.CharField(max_length=20, blank=False)
    apellido = models.CharField(max_length=20, blank=False)
    documento = models.TextField(max_length=20, blank=False, unique=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user_id)

    class Meta:
        db_table = "Admin"

#Modelo de datos para el Gerente
class Gerente(models.Model):
    nombre = models.CharField(max_length=20, blank=False)
    apellido = models.CharField(max_length=20, blank=False)
    documento = models.TextField(max_length=20, blank=False, unique=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    tipo_documento = models.CharField(max_length=10, blank=False, null=False)
    direccion = models.TextField(max_length=20, blank=False)
    telefono = models.CharField(max_length=15, default='0000000')

    def __str__(self):
        return self.documento

    class Meta:
        db_table = "Gerente"

#Modelo de datos para el Operador
class Operador(models.Model):
    nombre = models.CharField(max_length=20, blank=False)
    apellido = models.CharField(max_length=20, blank=False)
    documento = models.TextField(max_length=20, blank=False, unique=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    tipo_documento = models.CharField(max_length=10, blank=False, null=False)
    direccion = models.TextField(max_length=20, blank=False)
    telefono = models.CharField(max_length=15, default='0000000')

    def __str__(self):
        return self.documento

    class Meta:
        db_table = "Operador"

#Modelo de datos para los Clientes
class Cliente(models.Model):
    nombre = models.CharField(max_length=20, blank=False)
    apellido = models.CharField(max_length=20, blank=False)
    documento = models.TextField(max_length=20, blank=False, unique=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    tipo_documento = models.CharField(max_length=10, blank=False, null=False)
    direccion = models.TextField(max_length=20, blank=False)
    telefono = models.CharField(max_length=15, default='0000000')

    def __str__(self):
        return self.documento

    class Meta:
        db_table = "Cliente"

#Modelo de datos para contrato
class Contrato(models.Model):
    id_contrato = models.BigAutoField(primary_key=True)
    direccion = models.TextField(max_length=20, blank=False)
    estrato = models.IntegerField(blank=False, null=False)
    lat = models.FloatField(blank=False, null=False)
    lon = models.FloatField(blank=False, null=False)
    codigo_postal = models.TextField(max_length=12, null=False, blank=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.id_contrato

    class Meta:
        db_table = "Contrato"

#Modelo de datos para la Factura
class Factura(models.Model):
    id_factura = models.BigAutoField(primary_key=True)
    lectura = models.TextField(max_length=20, blank=False, null=False)
    ciclo = models.TextField(max_length=10, null=False, blank=False)
    valor = models.FloatField(null=False, default=0.00)
    valor_recargo = models.FloatField(null=False, default=0.00)
    fecha_expedición = models.DateField(null=False)
    fecha_vencimiento = models.DateField(null=False)
    estado = models.CharField(max_length=10, default='En mora', null=False)
    fecha_pago = models.DateField(max_length=20, null=False)
    medio_recaudo = models.CharField(max_length=20, null=False, blank=False)
    id_contrato = models.ForeignKey(Contrato, on_delete=models.CASCADE)

    def __str__(self):
        return self.id_factura

    class Meta:
        db_table = "Factura"
