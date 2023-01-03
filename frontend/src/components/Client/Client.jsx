import React from "react";

import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Login from "../Login/Login";
//Styles
import ".//../../assets/styles/content.css";

//Components
import Graph from "./Graph";


//const Nombre = () => { return (Login.user.username) };

const Client = () => {
    return (
        <div>
            <Card className="title">
                <Card.Body>¡Bienvenido/a de vuelta, hola </Card.Body>
            </Card>
            <Row className="row">
                <Col className="col" xs={5}>
                    <Card className="content-card" >
                        <Card.Body>
                            ESTADO DE FACTURA: 
                            <span className="green-text"> Al día</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">
                    <Graph />
                </Col>

                <Col className="col">
                    <Row className="row">
                        <Col className="col">
                            - Residencia <br></br> - Estrato 3
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="col">
                            <Card className="content-card">
                                <Card.Body>
                                    - Tu consumo en el último mes fue de 1000 kWh
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="row publicity">
                ESPACIO PARA PUBLICIDAD
            </Row>
        </div>
    );
};

export default Client;