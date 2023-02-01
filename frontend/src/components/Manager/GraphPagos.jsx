import React, { Component } from 'react';
import CanvasJSReact from '../../canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class GraphPagos extends Component {

    constructor(props) {
        super(props)
        this.state = props.state.state

        const returnPercentagesPagos = (facturas) => {
            let pagados = 0
            let noPagados = 0
            for(let i = 0; i < facturas.length; i++){
                if(facturas[i].estado === "Pagado"){
                    pagados += 1
                }else{
                    noPagados += 1
                }
            }
            return [pagados, noPagados]
        }

        this.datosPagos = returnPercentagesPagos(this.state.facturas)

        CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#74D41F",
                "#D71F1F",   
                ]);
    }

    

    render() {
        const options = {
            widht: 200,
            height: 500,
            animationEnabled: true,
            exportEnabled: true,
            colorSet: "greenShades",
            theme: "light2", // "light1", "dark1", "dark2"
            title: {
                text: "Pagos de Facturas"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: this.datosPagos[0], label: "Pagados" },
                    { y: this.datosPagos[1], label: "No Pagados" },
                ]
            }]
        }

        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default GraphPagos;  