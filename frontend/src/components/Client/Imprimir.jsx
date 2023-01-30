import React, { useRef} from 'react';
import ReactToPrint from 'react-to-print';
import { useLocation } from "react-router-dom";

import { Button } from "react-bootstrap";

import {Factura} from "./Factura.jsx";

const Imprimir = () => {
    const componentRef = useRef();

    let state = useLocation().state
    state['ref'] = componentRef

    return (
      <div>
        <Factura state={state}/>
        <center>
        <ReactToPrint
          trigger={() => <Button variant='success'>Print this out!</Button>}
          content={() => componentRef.current}
        />
        </center>
        
      </div>
    )
};

export default Imprimir;