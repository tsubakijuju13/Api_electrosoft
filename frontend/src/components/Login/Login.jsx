import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

import * as LoginAPI from "./LoginAPI";

//Styles
import './/../../assets/styles/login.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//<img className="logo" src={require("./../../imagenes/logo1.png")} alt="logo" />

const Login = () => {
    const navigate = useNavigate();

    const initialState = { username: "chostoy@gmail.com", password: "123" };
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
                //const tokenisexpired = isExpired(token);
                console.log(decodedToken);
                console.log("Login successful");
                setUser(initialState);
                switch (decodedToken.role) {
                    case "administrador": navigate("/admin");
                         console.log("Login admin successful");

                        break;
                    case "cliente": navigate("/client");
                         console.log("Login client successful");

                        break;
                    case "operador": navigate("/operator");
                    console.log("Login operador successful");

                        break;
                    case "gerente": navigate("/manager");
                    console.log("Login gerente successful");

                }
            } else {
                console.log("Login failed");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="background">
            <div className="electrosoft-title">
                <span>ELECTROSOFT</span>
            </div>


            <div className="form-container">
                <Form id="sign-in-form" className="form" onSubmit={handleSubmit}>

                    <h1 class="form-title" >¡Bienvenido!</h1>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="correo form-text">Correo</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Ingresar Correo" name="username" value={user.username} onChange={handleInputChange} className="position-relative" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className="form-text" >Contraseña</Form.Label>
                        <Form.Control type="password" size="lg" placeholder="Ingrese Su Contraseña" name="password" value={user.password} onChange={handleInputChange} />
                    </Form.Group>

                    <div class="d-grid" className="text-container">
                        <Button variant="outline-warning" type="submit" className="submit-button">Ingresar</Button>
                    </div>

                    <div class="my-3" className="text-container">
                        <span className="subtext">¿Olvidaste tu contraseña? <a className="subtext link" href="/recover">Recuperar Contraseña</a></span>
                        <span className="subtext">¿Aún no tienes cuenta? <a className="subtext link" href="/signup">Registrate</a></span>

                    </div>

                </Form>
            </div>
        </div>

    )
};

export default Login;
