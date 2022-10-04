import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {
    contador = 0;

    // state= {
    //     contador: 0  Se puede utilizar asi tambien es igual al constructor de abajo
    // }
    constructor(props){
        super(props);
        this.state= {
            contador: 0
        }
    }
    sumar = (e) => {
        this.setState({
            contador: (this.state.contador +1)
        })
    }
    restar(e) {
        this.setState({
            contador: (this.state.contador - 1)
        })
    }
    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>{nombre}</h2>
                <h3>{edad} tengo</h3>
            </div>
        );
        return presentacion;
    }
    render() {
        return (
            <section id="content">
                {this.HolaMundo("francisco", 12)}
                <section className="componentes">

                    <MiComponente />
                    <h2>
                        Estados react
                    </h2>
                    <p>
                        Contador: {this.state.contador}
                    </p>
                    <p>
                        <input type="button" value="Sumar" onClick={this.sumar}></input>
                        <input type="button" value="Restar" onClick={this.restar.bind(this)}></input>
                    </p>
                </section>
            </section>
        );

    }
}
export default SeccionPruebas;