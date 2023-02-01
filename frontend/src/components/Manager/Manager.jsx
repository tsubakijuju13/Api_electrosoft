import React from "react";
import { useLocation } from "react-router-dom";
import GraphConsumos from "./GraphConsumos";
import GraphPagos from "./GraphPagos";
import Publicidad from "./Publicidad";
import { Row, Col } from "react-bootstrap";

const Manager = () => {

    const API_FACTURAS = "http://localhost:8000/factura/"

    const [state, setState] = React.useState(useLocation())

    //console.log(state)

    return (
        <div>
            <Row>
                <Col>
                    <GraphConsumos state={state} xs={6}/>
                </Col>
                <Col>
                    <GraphPagos state={state} xs={6}/>
                </Col>
            </Row>
            {/* <Row>
                <Publicidad />
            </Row> */}
            
        </div>
    )

};

export default Manager;