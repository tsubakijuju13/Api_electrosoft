import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Styles
import './/../../assets/styles/login.css';
import './RecoveryPass.css';


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
    <div className="backgroundrecovery">

        
      <Form
        id="recover-form"
        onSubmit={handleSubmit}
      >
        <h1 className="form-title">Recupera tu contraseña</h1>
    <Row className="justify-content-sm-center">
      <Form.Group as={Col} md="5"  /*</Row>controlId="validationCustom01"*/>
            
            <Form.Label className="Letras">Introduce tu correo</Form.Label>
              <Form.Control 
              required
              type="email"
              placeholder="Correo registrado"
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            </Form.Group>
            </Row>
          
      <Row className="justify-content-md-center">
          
          <Form.Group  md="2" /*controlId="validationCustom01"*/>
            <div className="boton">
          <Button type="submit">
            Enviar
          </Button>
          </div>
        </Form.Group>
      </Row>
      </Form>
    </div>
  );
}
export default FormularioRecuperarContraseña;