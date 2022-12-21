import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

import * as LoginAPI from "./LoginAPI";

//Styles
import './/../../assets/styles/login.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    const navigate = useNavigate();

    const initialState = { username: "juanes", password: "123" };
    const [user, setUser] = useState(initialState);

    const handleInputChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response;
            response = await LoginAPI.getToken(user);

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                let token = data.access;
                const decodedToken = decodeToken(token);
                const tokenisexpired = isExpired(token);
                console.log(decodedToken);
                console.log(tokenisexpired);
                console.log("Login successful");
                setUser(initialState);
                navigate("/client");
            } else {
                console.log("Login failed");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="fondo">

            <Form id="sign-in-form" className="formulario" onSubmit={handleSubmit}>

                <img className="logo"
                    src={require("./../../imagenes/logo1.png")} alt="logo" />


                <h1 class="titulo" >Iniciar Sesión</h1>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="texto">Correo</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Ingresar Correo" name="username" value={user.username} onChange={handleInputChange} className="position-relative" />
                    <Form.Text className="text-muted">
                        Tu correo esta seguro con nosotros.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label className="texto" >Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese Su Contraseña" name="password" value={user.password} onChange={handleInputChange} />
                </Form.Group>

                <div class="d-grid">
                    <Button variant="primary" type="submit" class="btn btn-primary">Ingresar</Button>
                </div>

                <div class="my-3">
                    <span className="subtexto" >No tienes cuenta?<a href="/registro"> Registrate</a></span>
                    <br />
                    <span className="texto" ><a href="a"> Recuperar Contraseña</a></span>
                </div>

            </Form>
        </div>

    )
};

export default Login;
