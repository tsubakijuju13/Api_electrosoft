import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Circle, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './index.css'

const Geomap = (props) => {

    //Bueno iba a realizar la petición desde aqui pero la idea es hacerlo un componente reutilizable
    //Esto que ven es el get a la ruta que hace la consulta a la API para conseguir la longitud y latitud
    /*useEffect(() => {
        axios.get('https://nominatim.openstreetmap.org/?street=Carrera+99&city=polvorines&country=Cali&state=Valle+del+Cauca&country=Colombia&format=json')
            .then((res) => {
                //Seteo tanto log como lat
                setLat(res.data[0]['lat']);
                setLon(res.data[0]['lon']);
            });
    }, []);*/ //--> propuesta: hacer una petición get y pasarla a este componente

    return(
        <MapContainer center={[props.lat, props.lon]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={[props.lat, props.lon]} color='red' fill='#f03' fillOpacity={0.5} radius={500}>
                <Popup>
                    Información extra  ....
                </Popup>
            </Circle>
        </MapContainer>
    );
}

export default Geomap