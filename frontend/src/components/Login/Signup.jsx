import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Signup.css";

function FormularioRegistroAdmin() {
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


   <div className="background">*/
      <Form
        id="register-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <img
          className="logo"
          src={require("./../../imagenes/logo.png")}
          alt="logo"
        />

        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label className="Letras">Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              defaultValue="Chostoy"
              pattern="[A-Za-z-ñ]+"
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label className="Letras">Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Celtiz"
              pattern="[A-Za-z-ñ]+"
            />
            <Form.Control.Feedback>Correcto</Form.Control.Feedback>
          </Form.Group>
        </Row>
          <br></br>
        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label className="Letras">Documento</Form.Label>
            <Form.Control
              maxlength="20"
              minlength="3"
              type="text"
              placeholder="Numero de Documento"
              required
              pattern="[0-9]+"
            />
            <Form.Control.Feedback type="invalid">
              Ingrese su docuemnto.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <br></br>
        <Row className="justify-content-md-center">
          <Col md="3">
            <Form.Select>
              <option>Cedula</option>
              <option>Ti</option>
              <option>Pasaporte</option>
            </Form.Select>
          </Col>
        </Row>

        <br></br>
        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label className="Letras">Direccion</Form.Label>
            <Form.Control type="text" placeholder="Direccion" required />
            <Form.Control.Feedback type="invalid">
              Escribe tu direccion.
            </Form.Control.Feedback>
          </Form.Group>

          <br></br>
          <Form.Group as={Col} md="2" controlId="validationCustom06">
            <Form.Label className="Letras">Telefono</Form.Label>
            <Form.Control
              maxlength="10"
              minlength="9"
              type="text"
              placeholder="Telefono"
              required
              pattern="[0-9]+"
            />
            <Form.Control.Feedback type="invalid">
              Numero de telefono.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <br></br>
        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label className="Letras">Email</Form.Label>
            <Form.Control type="Email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Ingrese su Email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <br></br>
        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="2" controlId="validationCustom06">
            <Form.Label className="Letras">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" required />
            <Form.Control.Feedback type="invalid">
              Ingrese su contraseña.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom07">
            <Form.Label className="Letras">Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar Contraseña"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese su contraseña.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        
        
        <br></br>
        <Row className="justify-content-md-center">
        <Col md="4" >
        <Form.Group className="justify-content-md-center" id="abajo">
          <Form.Check
            className="Letras"
            required
            label="Estoy de acuerdo con los terminos y condiciones"
            feedback="Debe aceptar antes de enviar."
            feedbackType="invalid"
          />
        
          <Button type="submit">Registrar</Button>
        </Form.Group>
        </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormularioRegistroAdmin;
