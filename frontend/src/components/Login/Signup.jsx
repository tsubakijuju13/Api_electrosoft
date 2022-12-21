import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import * as LoginAPI from "./LoginAPI";
import {useRef} from 'react';

//Styles
import './/../../assets/styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const FormularioRegistroAdmin = () => {
  const navigate = useNavigate();

  const initialState = { 
    username: "hola",
    email: "",
    password:"",
    name: "",
    last_name: "",
  };
  const [user, setUser] = useState(initialState);

  const handleInputChange = (event) => {
      setUser({ ...user, [event.target.name]: event.target.value });
  };

  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current.value);
  }

  
  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          let response;
          response = await LoginAPI.signup(user);

          const data = await response.json();
          console.log(data);
          if (response.ok) {
              let token = data.access;
              const decodedToken = decodeToken(token);
              const tokenisexpired = isExpired(token);
              console.log(decodedToken);
              console.log("register successful");
              setUser(initialState);
              navigate("/");
          } else {
              console.log("Login failed");
          }

      } catch (error) {
          console.log(error);
      }

      console.log(user);
  };

  return (


   <div className="background">
      <Form id="register-form" onSubmit={handleSubmit}
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
              /*onBlur={(e) => console.log(e.target.value)}*/
              value={user.name}
              name = "name"
              required
              className="nombre"
              type="text"
              placeholder="Nombre"
             
              pattern="[A-Za-z-ñ]+"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label className="Letras">Last name</Form.Label>
            <Form.Control
              /*onBlur={(e) => console.log(e.target.value)}*/
              value={user.last_name}
              name = "last_name"
              required
              type="text"
              placeholder="Last name"
             
              pattern="[A-Za-z-ñ]+"
              onChange={handleInputChange}
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
            <Form.Label className="Letras">Tipo de Documento</Form.Label>
            <Form.Select >
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
            <Form.Control type="text" placeholder="Direccion"   required />
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
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label className="Letras">Email</Form.Label>
            <Form.Control type="Email" placeholder="Email" name="email" value={user.email} onChange={handleInputChange} required />
            <Form.Control.Feedback type="invalid">
              Ingrese su Email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <br></br>
        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="2" controlId="validationCustom08">
            <Form.Label className="Letras">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" value={user.password}  name="password" onChange={handleInputChange} required />
            <Form.Control.Feedback type="invalid">
              Ingrese su contraseña.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom09">
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
