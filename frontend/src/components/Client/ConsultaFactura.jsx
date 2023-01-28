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

  const { state } = useLocation()

  const [contratoSeleccionado, setContratoSeleccionado] = useState(0)

  const [contratos, setContratos] = useState([])
  useEffect(() => {
    getContratos();
    //getDataContrato();
  }, []);

  const getContratos = () => {
    axios.get(urlContrato + state.user_id + "/cliente").then((response) => {
      console.log(contratoSeleccionado)
      setContratos(response.data);
      setContratoSeleccionado(response.data[0].id_contrato)
    });
  }


  const [facturas, setFacturas] = useState([]);
  useEffect(() => {
    getFacturas();
    //getDataContrato();

  }, []);

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
      dataField: "valor_recargo",
      text: "Valor recargo",
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
        <a href="/client/pagar-factura">
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
    setContratoSeleccionado(event.target.value)
    console.log(event.target.value)
    getFacturas()
    //setContratos({...contratos, selected:event.target.value})
  }

  const getFacturas = () => {

    axios.get(urlFactura + contratoSeleccionado + "/contrato/").then((response) => {
      console.log(response.data);
      setFacturas(response.data);
    });
  };

  return (
    /* drop-down*/
    <div>
      <Card className="title mb-3">
        <Card.Body> FACTURAS </Card.Body>
      </Card>

      <label className="label">Selecciona tu contrato</label>
      {/* Drop-down linlado a la base de datos */}

      <select name="contratos" value={contratoSeleccionado} onChange={changeContrato}>
        {contratos.map((e, key) => {
          return <option key={key} value={e.id_contrato}>{e.direccion}</option>;
        })}
      </select>
      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          CONTRATOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {contratos.map((e, key) => {
            return <Dropdown.Item value={e.id_contrato}>{e.direccion}</Dropdown.Item>;
          })}
          {/* <Dropdown.Item header>Seleccione su contrato</Dropdown.Item>
          <Dropdown.Item onClick={() => alert("ha cambiado de contrato")}>
            contrato 0
          </Dropdown.Item>
          <Dropdown.Item href={urlContrato}>contrato 1</Dropdown.Item>
          <Dropdown.Item href="https://www.google.com.co/">
            contrato 2
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>

      {/* <Select options={columns} labelField="name" valueField="id" onChange={(values) => this.setValues(values)} /> */}

      <div className="tabla">
        <BootstrapTable
          keyField="id"
          data={facturas}
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
