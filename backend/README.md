```
# Datos para pruebas en la API

{
    "fecha_vencimiento": "2023-1-1",
    "estado": "En Mora",
    "consumo_energia": 3,
    "energia_lectura_actual": "12",
    "energia_valor_total": 35667,
    "lys_valor_total": 12314,
    "alumbrado_valor_total": 2345,
    "pago_total": 312314535,
    "codigo_contrato": 1
}
Juanes165 — 02/01/2023 21:59
http://localhost:8000/contrato/
{
    "fecha_vinculación": "2023-1-1",
    "estado_contrato": "Active",
    "ciudad": "cali",
    "direccion": "casrasf",
    "estrato": "2",
    "uso": "1",
    "id_cliente": 1
}
http://localhost:8000/usuarios/
{
    "nombre": "Juan",
    "apellido": "Betancourt",
    "role": "Cliente",
    "identificacion": "123123123",
    "direccion": "casras",
    "ciudad": "cal",
    "barrio": "ascas",
    "telefono": "3124567890",
    "email": "juan@gmail.com",
    "password":"123",
    "re_password":"123"
}
http://localhost:8000/factura/
{
    "fecha_vencimiento": "2022-5-25",
    "estado": "En Mora",
    "consumo_energia": 3,
    "energia_lectura_actual": "12",
    "energia_valor_total": 35667,
    "lys_valor_total": 12314,
    "alumbrado_valor_total": 2345,
    "codigo_contrato": 1,
    "valor_total":441234,
    "valor_recargo": 312314535
}
PARA FILTRAR POR CONTRATO http://localhost:8000/factura/1/contrato/
{
    "username": "geider",
    "email": "geideran808087@gmail.com",
    "password": "mami2000",
    "role": "Cliente",
    "active": true,
    "name": "Geider",
    "last_name": "Montano"
}
{
    "username": "santiago",
    "email": "santirami@gmail.com",
    "password": "soyfandelaslolis",
    "role": "Cliente",
    "active": true,
    "name": "Santiago",
    "last_name": "Ramirez"
}
{
    "username": "juanes",
    "email": "chostoy@gmail.com",
    "password": "123",
    "role": "Cliente",
    "active": true,
    "name": "Juan",
    "last_name": "Betancourt"
}

```