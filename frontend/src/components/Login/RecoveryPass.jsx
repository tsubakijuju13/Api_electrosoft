import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./RecoveryPass.css";


function FormularioRecuperarContraseña() {
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
    <div className="background">

        
      <Form
        id="register-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h1 className="titulo">Recupera tu contraseña</h1>
    <Row className="justify-content-sm-center">
      <Form.Group sm="2" controlId="validationCustom01">
            
            <Form.Label className="Letras">Introduce tu correo</Form.Label>
            
              <Form.Control
              required
              type="email"
              placeholder="Correo registrado"
              defaultValue="Alguien@example.com"
              pattern="[A-Za-z-ñ]+"
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            </Form.Group>
            </Row>
          
      <Row className="justify-content-md-center">
          
          <Form.Group  md="2" controlId="validationCustom01">
          <Button type="submit" className="boton">
            Enviar
          </Button>
        </Form.Group>
      </Row>
      </Form>
    </div>
  );
}
export default FormularioRecuperarContraseña;