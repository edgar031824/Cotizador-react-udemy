import React, { Component } from 'react';
import { Header } from "./Header";
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca } from "../Helpers";
import Resumen from './Resumen';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultado: "",
      datos: {}
    }
  }
  cotizarSeguro = (iobInfo) => {
    const { brand, year, plan } = iobInfo;

    //definir una base
    let result = 2000;

    //obtener dif de años
    let yearDiference = obtenerDiferenciaAnio(year);

    // por cada año restar el 3% al valor del seguro
    result -= ((yearDiference * 3) * result) / 100;

    // americano 15%, asiatico 5% y europea 30% de incremento al valor actual
    result = calcularMarca(brand) * result;

    //el plan básico incrementa el valor el 20% y el completo lo incrementa el 50%
    if (plan === "basico") {
      result = result * 1.20;
    } else {
      result = result * 1.50;
    }
    //se parsea para que solo quede de 2 decimales
    result = parseFloat(result).toFixed(2);

    this.setState({
      resultado: result,
      datos: iobInfo
    })
  }
  render() {
    return (
      <div className="contenedor">
        <Header
          titulo="Cotizador de seguro de autos"
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
        </div>
        <Resumen
          datos={this.state.datos}
          resultado={this.state.resultado}
        />
      </div>
    )

  }
}

export default App;
