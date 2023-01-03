import React, { Component } from "react";
import { useState } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";

import axios from "axios";

import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { useEffect } from "react";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";

function ConsultaFactura() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8000/factura/").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  const columns = [
    {
      dataField: "no_factura",
      text: "ID",
      sort: true,
      
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
        dataField: "imprimir factura",
        events: {
            onClick: (e, column, columnIndex, row, rowIndex) => { console.log("clicked on row with index: " + rowIndex); },
            },

    }

  ];

  return (

    /* drop-down*/
  <div> 
    <Card className="title mb-3">
                <Card.Body> FACTURAS </Card.Body>
            </Card>

            <label className="label">Seleccione el contrato</label>
    <Dropdown className="mb-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        CONTRATOS
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">contrato 0</Dropdown.Item>
        <Dropdown.Item href="#/action-2">contrato 1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">contrato 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
      >
        </BootstrapTable>

    </div>
    </div>
  );
}

export default ConsultaFactura;
