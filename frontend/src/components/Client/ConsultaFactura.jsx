import React, { Component } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom"

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { useEffect } from "react";
//import { icon } from "@fortawesome/fontawesome-svg-core";

function ConsultaFactura() {

  const urlFactura = "http://localhost:8000/factura/";
  const urlContrato = "http://localhost:8000/contrato/";

  const [ state, setState ] = useState(useLocation().state)

  console.log(state)


  const buscarContrato = (contrato) => {
    for(var i = 0; i < state.contratos.length; i++){
      if(state.contratos[i].id_contrato == contrato){
        return i
      }
    }
  }

  const columns = [
    {
      dataField: "no_factura",
      text: "ID",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "fecha_expedicion",
      text: "Fecha de expedición",
      sort: true,
    },
    {
      dataField: "fecha_vencimiento",
      text: "Fecha de vencimiento",
      sort: true,
    },
    {
      dataField: "valor_total",
      text: "Valor",
      sort: true,
    },
    {
      formatter: (cellContent, row) => (
        <button
          className="btn btn-primary"
          onClick={() => alert("imprimiendo factura")}
        >
          Imprimir
        </button>
      ),
      text: "Imprimir Factura",
    },
    {
      formatter: (cellContent, row) => (
        <a href="/cliente/pagar-factura">
          <button
            className="btn btn-primary"
          >
            Pagar factura
          </button>
        </a>
      ),

      text: "Pagar tu Factura",
    }

  ];

  const changeContrato = (event) => {
    console.log(event.target.value)
    setState({...state, contratoSeleccionado:event.target.value})
  }

  
  return (
    /* drop-down*/
    <div>
      <Card className="title mb-3">
        <Card.Body> FACTURAS </Card.Body>
      </Card>

      <label className="label">Selecciona tu contrato: &nbsp;</label>
      {/* Drop-down linlado a la base de datos */}

      <select className='' name="contratos" value={state.contratoSeleccionado} onChange={changeContrato}>
        {state.contratos.map((e, key) => {
          return <option key={key} value={e.id_contrato}>{e.direccion}</option>;
        })}
      </select>

      {/* <Select options={columns} labelField="name" valueField="id" onChange={(values) => this.setValues(values)} /> */}
      <br></br>
      <br></br>
      <div className="tabla">
        <BootstrapTable
          keyField="id"
          data={state.facturas[buscarContrato(state.contratoSeleccionado)]}
          columns={columns}
          striped
          hover
          condensed
          pagination={paginationFactory()}
          filter={filterFactory()}
          button
        ></BootstrapTable>
      </div>
    </div>
  );
}

export default ConsultaFactura;
