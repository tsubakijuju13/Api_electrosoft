import React, { Component } from "react";
import { useState } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import Card from "react-bootstrap/Card";

import axios from "axios";

import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { useEffect } from "react";

function ConsultaFactura() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8000/api/usuarios/").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  const columns = [
    {
      dataField: "numero_factura",
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

  ];

  return (
    <div className="tabla">
         <Card className="title mb-3">
                <Card.Body> FACTURAS </Card.Body>
            </Card>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
      
      filter={filterFactory()}
      />

    </div>
  );
}

export default ConsultaFactura;
