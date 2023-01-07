import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/*import InputGroup from 'react-bootstrap/InputGroup';*/
import Row from 'react-bootstrap/Row';

function FormularioCrearFacturaOperador() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom06">
          <Form.Label>Numero Contrato</Form.Label>
          <Form.Control type="number" placeholder="No Contrato" required />
            <Form.Control.Feedback type="invalid">
              Ingrese un No de Contrato Valido.
            </Form.Control.Feedback>
          </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom07">
          <Form.Label>Lectura Registrada</Form.Label>
          <Form.Control type="" placeholder="Lectura Actual" required />
            <Form.Control.Feedback type="invalid">
              Ingrese el valor de la Lectura Actual
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Button type="submit" as={Col} md="2">
          Crear Factura
        </Button>
      </Row>
    </Form>
  );
}

export default FormularioCrearFacturaOperador;