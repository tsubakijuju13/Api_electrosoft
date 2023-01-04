import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

//Styles
import ".//../../assets/styles/content.css";

//Components
import Manager from "./Manager";
import Operator from "./Operator";

import ResponsiveTable from "../../common/responsivetable";

const AdminView = () => {
  return (
    <div>
      <Card className="title">
        <Card.Body>¡Bienvenido/a de vuelta, Geider!</Card.Body>
      </Card>
      <Row className="row">
        <Col className="col" xs={5}></Col>
      </Row>

      <div>
        <h1>Registro de Pagos</h1> <ResponsiveTable />
      </div>
      <Row className="row publicity">ESPACIO PARA PUBLICIDAD</Row>
    </div>
  );
};
export default AdminView;
