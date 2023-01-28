import React from "react";

import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

//Styles
import ".//../../assets/styles/content.css";

//Components
import Graph from "./Graph";
import { useLocation } from "react-router";

// imagenes
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png"; 

// radom de iamgenes
const imagenes = [banner1, banner2];
const random = Math.floor(Math.random() * imagenes.length);

//const Nombre = () => { return (Login.user.username) };

const Client = () => {

    const {state} = useLocation()

    return (
        <div>
            <Card className="title">
                <Card.Body>¡Bienvenido/a de vuelta, {state.name} </Card.Body>
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

           <div className="publicity">
        {/* poner imagenes de publicidad */}
        <Link to="/client/nuevo_ontrato" target="_blank">
          <img src={imagenes[random]} alt="publicidad" className="baner" />
        </Link>
      </div>
        </div>
    );
};

export default Client;