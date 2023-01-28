from django.db import models
from django.conf import settings
from django.core.mail import EmailMessage, get_connection
from django.core.exceptions import ValidationError
from django.core.mail import send_mail

def valid_cost_service(value):
    if value <= 0.0:
        raise ValidationError({"message": "El valor debe ser un numero positivo"})

def email_sender():
    '''
    Metodo para enviar un correo a un cliente asociado a una factura,
    al momento de crear una factura se dispara un trigger para formalizar el proceso
    ''
    with get_connection(host=settings.EMAIL_HOST, port=settings.EMAIL_PORT, username='electuv@gmail.com', password= settings.EMAIL_HOST_PASSWORD,
                        use_tls=settings.EMAIL_USE_TLS) as connection:
                        subject = "YOUR CREDICT CARD ***4573 has been encrypted"
                        from_email = "xd"
                        to = ["santiago.ramirez.ospina@correounivalle.edu.co",]
                        body =  'electuv@gmail.com'
                        EmailMessage(subject, from_email, body, to, connection=connection).send()'''

    send_mail(
        subject = 'Thats your subject',
        message = 'Thats your message body',
        from_email = "electuv@gmail.com",
        recipient_list = ['santiago.ramirez.ospina@correounivale.edu.co',],
        auth_user = 'electuv@gmail.com',
        auth_password = 'dyizensafqkuvwjb',
        fail_silently = False,
    )


class Factura(models.Model):
    no_factura = models.BigAutoField(primary_key=True)
    codigo_contrato = models.ForeignKey('Contrato.Contrato', on_delete=models.CASCADE)

    fecha_expedicion = models.DateField(auto_now_add=True)
    fecha_vencimiento = models.DateField(null=False, blank=False)
    estado = models.CharField(max_length=20, blank=False, default="En mora")

    consumo_energia = models.FloatField(null=True, blank=False)
    energia_lectura_actual = models.CharField(max_length=20, blank=False, null=True, default='0.0')
    #energia_lectura_anterior = models.CharField(max_length=20, blank=False, default='0.0')

    energia_valor_total = models.FloatField(validators=[valid_cost_service], null=True, blank=False)
    alumbrado_valor_total = models.FloatField(validators=[valid_cost_service], null=True, blank=False)

    valor_total = models.FloatField(null=True, blank=False)

    class Meta:
        db_table = "Factura"
    
    def __str__(self):
        return '%s %f' % (self.factura, self.pago_total)

    def save(self, *args, **kwargs):
        email_sender()
        return super(Factura, self).save(*args, **kwargs)
