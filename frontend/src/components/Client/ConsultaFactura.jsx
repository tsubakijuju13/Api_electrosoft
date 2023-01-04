import React, { Component } from "react";
import { useState } from "react";

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
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    //getDataContrato();
  }, []);

  const urlFactura = "http://localhost:8000/factura/1/contrato/";
  const urlContrato = "http://localhost:8000/contrato/";

  const getData = () => {
    axios.get(urlFactura).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  // const getDataContrato = () => {
  //   axios.get(urlContrato).then((response) => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // };

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
  ];

  return (
    /* drop-down*/
    <div>
      <Card className="title mb-3">
        <Card.Body> FACTURAS </Card.Body>
      </Card>

      <label className="label">Seleccione el contrato</label>
      {/* Drop-down linlado a la base de datos */}

      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          CONTRATOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item header>Seleccione su contrato</Dropdown.Item>
          <Dropdown.Item onClick={() => alert("ha cambiado de contrato")}>
            contrato 0
          </Dropdown.Item>
          <Dropdown.Item href={urlContrato}>contrato 1</Dropdown.Item>
          <Dropdown.Item href="https://www.google.com.co/">
            contrato 2
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* <Select options={columns} labelField="name" valueField="id" onChange={(values) => this.setValues(values)} /> */}

      <div className="tabla">
        <BootstrapTable
          keyField="id"
          data={data}
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
