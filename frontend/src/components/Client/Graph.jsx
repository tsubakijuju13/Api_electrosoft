import React from "react";
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto'

function Graph() {
    const data = {
        labels: ["enero", "febrero", "marzo","abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],   /*etiquetas de la grafica*/
        datasets: [{
            data: [500,600,700,800,500,400,500,600,300,400,800,1000], /*datos de la grafica*/
            backgraoundColor: 'transparent', /*color de fondo*/
            borderColor: '#007bff', /*color de la linea*/
            pointBackgroundColor: '#007bff', /*color de los puntos*/
            pointBorderWith: 4, /*tamaño de los puntos*/
            tension: 0.0 /*lineas curvas*/
        }] 
    };
    const options = {
        plugins: {
            legend: false /*ocultar leyenda*/
        },
        scales: {
            x: {
                grid: {
                    display: false /*ocultar lineas de la grafica*/
                }
            },
            y: {
                min: 200,
                max: 1200,
                ticks: {
                    stepSize: 2, /*tamaño de los pasos*/
                    callback: (value) => value + 'kw' /*agregar texto a los valores de la grafica*/
                },
                grid: {
                    boardDash: [10] /*lineas punteadas*/

            }
        }
    }
    }


    return (
        <div style={{width: '500px', height: '300px', marginLeft: '20px' }}   > {/*tamaño de la grafica*/}
            <Line data={data} options={options}></Line> {/*llamada a la grafica*/}
        </div>
    );





}


export default Graph;