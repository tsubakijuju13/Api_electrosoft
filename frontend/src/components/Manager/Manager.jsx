import React from "react";
import { useLocation } from "react-router-dom";
import GraphConsumos from "./GraphConsumos";
import { Row, Col } from "react-bootstrap";

const Manager = () => {

    const API_FACTURAS = "http://localhost:8000/factura/"

    const [state, setState] = React.useState(useLocation())

    console.log(state)

    return (
        <div>
            <Row>
                <Col>
                    <GraphConsumos state={state} xs={6}/>
                </Col>
                <Col>
                    <GraphConsumos state={state} xs={6}/>
                </Col>
            </Row>
            
        </div>
    )

};

export default Manager;