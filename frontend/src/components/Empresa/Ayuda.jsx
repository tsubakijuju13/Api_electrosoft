import React from "react";
import {useState} from "react";
import "./ayuda.css";

const Ayuda = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item">
            <div className="title" onClick={() => toggle(index)}>
              <h2>{item.pregunta}</h2>
                <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div className={selected === index ? "content show" : "content"}> {item.respuesta} </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    pregunta: "¿Qué es la plataforma?",
    respuesta: "Es una plataforma que permite a los usuarios encontrar y contratar servicios de manera fácil y segura.",
  },
  {
    pregunta: "¿Cómo funciona?",
    respuesta:
      "Los usuarios pueden buscar servicios en la plataforma, y los proveedores pueden ofrecer sus servicios.",
  },
  {
    pregunta: "¿Cómo puedo registrarme?",
    respuesta:
      "Para registrarse, debe ingresar a la plataforma y completar el formulario de registro.",
  },
  {
    pregunta: "¿Cómo puedo iniciar sesión?",
    respuesta:"Para iniciar sesión, debe ingresar a la plataforma y completar el formulario de inicio de sesión.",
  },
  {
    pregunta: "¿Cómo puedo publicar un servicio?",
    respuesta:"Para publicar un servicio, debe ingresar a la plataforma y completar el formulario de publicación de servicios.",
  },
  {
    pregunta: "¿Cómo puedo buscar un servicio?",
    respuesta:"Para buscar un servicio, debe ingresar a la plataforma y completar el formulario de búsqueda de servicios.",
  },
  {
    pregunta: "¿Cómo puedo contactar a un proveedor?",
    respuesta:"Para contactar a un proveedor, debe ingresar a la plataforma y completar el formulario de contacto.",
  },
];

export default Ayuda;
