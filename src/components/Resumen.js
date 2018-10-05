import React, { Component } from 'react';
import { primeraMayuscula } from '../Helpers'
import Resultado from './Resultado';

class Resumen extends Component {

    mostrarResumen() {
        let { brand, year, plan } = this.props.datos,
            resultado=this.props.resultado;

        if (brand || year || plan) {
            return (
                <div className="resumen">
                    <h2>Resume de cotización</h2>
                    <ul>
                        <li>Marca: {primeraMayuscula(brand)}</li>
                        <li>Año: {primeraMayuscula(year)}</li>
                        <li>Plan: {primeraMayuscula(plan)}</li>
                    </ul>
                    <div className="resultado">
                    <Resultado
                      resultado={resultado}
                    />
                    </div>
                </div>   
            )
        }
    }
    render() {
        return (
            <div>
                {this.mostrarResumen()}
            </div>  
        )
    }
}

export default Resumen;