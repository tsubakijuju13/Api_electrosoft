import React, { Component } from 'react';
import CanvasJSReact from '../../canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class GraphConsumos extends Component {

    constructor(props) {
        super(props)
        this.state = props.state.state

        var dataFacturas = {
            "enero": 0,
            "febrero": 0,
            "marzo": 0,
            "abril": 0,
            "mayo": 0,
            "junio": 0,
            "julio": 0,
            "agosto": 0,
            "septiembre": 0,
            "octubre": 0,
            "noviembre": 0,
            "diciembre": 0
        }

        for (let i = 0; i < this.state.facturas.length; i++) {
            switch (this.state.facturas[i].fecha_expedicion.split('-')[1]) {
                case '01':
                    dataFacturas.enero += this.state.facturas[i].consumo_energia
                    break;
                case '02':
                    dataFacturas.febrero += this.state.facturas[i].consumo_energia
                    break;
                case '03':
                    dataFacturas.marzo += this.state.facturas[i].consumo_energia
                    break;
                case '04':
                    dataFacturas.abril += this.state.facturas[i].consumo_energia
                    break;
                case '05':
                    dataFacturas.mayo += this.state.facturas[i].consumo_energia
                    break;
                case '06':
                    dataFacturas.junio += this.state.facturas[i].consumo_energia
                    break;
                case '07':
                    dataFacturas.julio += this.state.facturas[i].consumo_energia
                    break;
                case '08':
                    dataFacturas.agosto += this.state.facturas[i].consumo_energia
                    break;
                case '09':
                    dataFacturas.septiembre += this.state.facturas[i].consumo_energia
                    break;
                case '10':
                    dataFacturas.octubre += this.state.facturas[i].consumo_energia
                    break;
                case '11':
                    dataFacturas.noviembre += this.state.facturas[i].consumo_energia
                    break;
                case '12':
                    dataFacturas.diciembre += this.state.facturas[i].consumo_energia
                    break;
                default:
                    break;
            }
        }

        console.log(dataFacturas)

        var mesesAnteriores = []
        mesesAnteriores.push(this.state.facturas[0].fecha_expedicion.split('-')[1]*1)
        for(let i = 1; i < 7; i++){
            var mes = mesesAnteriores[mesesAnteriores.length-1] -1
            if (mes <= 0){
                mes += 12
            }
            mesesAnteriores.push(mes)
        }

        this.dataFacturas = dataFacturas

        const meses = {
            1: 'Enero',
            2: 'Febrero',
            3: 'Marzo',
            4: 'Abril',
            5: 'Mayo',
            6: 'Junio',
            7: 'Julio',
            8: 'Agosto',
            9: 'Septiembre',
            10: 'Octubre',
            11: 'Noviembre',
            12: 'Diciembre'
        }

        var mesesGrafico = mesesAnteriores.map((mes) => {
            return meses[mes]
        })

        this.mesesGrafico = mesesGrafico

        const dataPoints = [
            { label: mesesGrafico[5],  y: dataFacturas[mesesGrafico[5].toLowerCase()] },
            { label: mesesGrafico[4],  y: dataFacturas[mesesGrafico[4].toLowerCase()] },  
            { label: mesesGrafico[3],  y: dataFacturas[mesesGrafico[3].toLowerCase()] },
            { label: mesesGrafico[2],  y: dataFacturas[mesesGrafico[2].toLowerCase()] },
            { label: mesesGrafico[1],  y: dataFacturas[mesesGrafico[1].toLowerCase()] },
            { label: mesesGrafico[0],  y: dataFacturas[mesesGrafico[0].toLowerCase()] }
        ]

        this.dataPoints = dataPoints

        CanvasJS.addColorSet("greenShades",
        [//colorSet Array
            "#6D1AA5",
        ]);

    }

    render() {

        const options = {
            widht: 200,
            height: 500,
            animationEnabled: true,
            theme: "light2",

            colorSet: "greenShades",

			title: {
				text: "Consumos generales de los últimos 6 meses",
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
				type: "line",
                //dataPoints: this.facturas
				dataPoints: this.dataPoints
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