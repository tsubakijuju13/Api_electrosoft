import React, { Component } from 'react';
import CanvasJSReact from '../../canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class GraphConsumos extends Component {

    constructor(props) {
        super(props)
        this.state = props.state

        var dataFacturas = {
            enero: [],
            febrero: [],
            marzo: [],
            abril: [],
            mayo: [],
            junio: [],
            julio: [],
            agosto: [],
            septiembre: [],
            octubre: [],
            noviembre: [],
            diciembre: []
        }

        // for (let i = 0; i < this.state.facturas.length; i++) {
        //     switch (this.state.facturas[i].fecha_expedicion.split('-')[1]) {
        //         case '01':
        //             dataFacturas.enero.push(this.state.facturas[i].consumo)
        //             break;
        //         case '02':
        //             dataFacturas.febrero.push(this.state.facturas[i].consumo)
        //             break;
        //         case '03':
        //             dataFacturas.marzo.push(this.state.facturas[i].consumo)
        //             break;
        //         case '04':
        //             dataFacturas.abril.push(this.state.facturas[i].consumo)
        //             break;
        //         case '05':
        //             dataFacturas.mayo.push(this.state.facturas[i].consumo)
        //             break;
        //         case '06':
        //             dataFacturas.junio.push(this.state.facturas[i].consumo)
        //             break;
        //         case '07':
        //             dataFacturas.julio.push(this.state.facturas[i].consumo)
        //             break;
        //         case '08':
        //             dataFacturas.agosto.push(this.state.facturas[i].consumo)
        //             break;
        //         case '09':
        //             dataFacturas.septiembre.push(this.state.facturas[i].consumo)
        //             break;
        //         case '10':
        //             dataFacturas.octubre.push(this.state.facturas[i].consumo)
        //             break;
        //         case '11':
        //             dataFacturas.noviembre.push(this.state.facturas[i].consumo)
        //             break;
        //         case '12':
        //             dataFacturas.diciembre.push(this.state.facturas[i].consumo)
        //             break;
        //         default:
        //             break;
        //     }
        // }

        // var mes_actual = this.state.facturas[0].fecha_expedicion.split('-')[1]

        // var datapoints = [
        //     { label: "Enero", y: dataFacturas.enero.reduce((a, b) => a + b, 0) },
        //     { label: "Febrero", y: dataFacturas.febrero.reduce((a, b) => a + b, 0) },
        //     { label: "Marzo", y: dataFacturas.marzo.reduce((a, b) => a + b, 0) },
        // ]

        
        //this.dataPoints = facturas.reverse()
        console.log(this.state)
    }

    render() {

        const options = {
            widht: 200,
            height: 500,
            animationEnabled: true,
            theme: "light2",

			title: {
				text: "Tus últimos consumos",
                fontSize: 22
			},
            // axisX: {
            //     title: "Social Network",
            //     reversed: true,
            // },
            axisY: {
                title: "Consumo",
                includeZero: true,
                labelFormatter: this.addSymbols,
            },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
                //dataPoints: this.facturas
				dataPoints: [
					{ label: "Septiembre",  y: 28  },
					{ label: "Octubre",  y: 30  },
					{ label: "Noviembre", y: 25  },
                    { label: "Diciembre", y: 15  },
                    { label: "Enero",  y: 10  },
				]
			}
			]
		}

        return (
        <div>
            <CanvasJSChart options = {options}
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
        );
    }

    addSymbols(e){
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
        if(order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    
}

export default GraphConsumos;  