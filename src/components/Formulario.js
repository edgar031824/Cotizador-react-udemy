import React, { Component } from 'react';

class Formulario extends Component {

    //los refs son para leer los valores de los campos de un formulario
    constructor(props) {
        super(props)
        this.brandRef = React.createRef();
        this.yearRef = React.createRef();
        this.basicPlan = React.createRef();
        this.fullPlan = React.createRef();
    }
    cotizarSeguro = (e) => {
        e.preventDefault();
        const plan = this.basicPlan.current.checked ? "basico" : "completo", 
            carInfo = {
                brand: this.brandRef.current.value,
                year: this.yearRef.current.value,
                plan
            };
        this.props.cotizarSeguro(carInfo);
    }
    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.brandRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.basicPlan} /> Básico
            <input type="radio" name="plan" value="completo" ref={this.fullPlan} /> Completo
            </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}

export default Formulario;