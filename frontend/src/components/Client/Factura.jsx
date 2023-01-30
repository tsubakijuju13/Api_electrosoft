import React, { Component } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import Card from "react-bootstrap/Card";
import { Document, Page, View } from "@react-pdf/renderer";

import "./Factura.jsx";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

import ReactToPrint from 'react-to-print';

//import {Prueba} from './prueba.jsx';

export const Factura = ({state}) => {
  
    const factura = state.verFactura
    
    return (
      <div ref={state.ref} style={{width:'100%', height:'80%', marginTop:'60px'}}>
        <div>
          <center>
            <h1>Factura: {factura.no_factura}</h1>
            <h2>Contrato: {factura.codigo_contrato}</h2>
            <h2>Fecha: {factura.fecha_expedicion}</h2>
            <h2>LO QUE TENES QUE PAGAR HP:{factura.energia_valor_total}</h2>
          </center>
        </div>
      </div>
    );
  };
