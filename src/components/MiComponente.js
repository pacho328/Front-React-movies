import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        let receta ={
            nombre: 'pizza',
            intedientes: ["tomate","queso","masa"],
            calorias: 400
        }
        return (
            // funcionaria casi igual al div with classname ="example"
            <React.Fragment> 
                <h1>{'Nombre: '+receta.nombre}</h1>
                <h2>{'Calorias: '+receta.calorias}</h2>
                { this.props.saludo &&
                    <h3>{this.props.saludo}</h3>
                }
                <ol>
                    {
                        receta.intedientes.map((ingredientes,i )=>{
                            return (
                                <li key={i} >
                                    {ingredientes}
                                </li>
                            )
                        })
                    }
                </ol>
            </React.Fragment>
            
        );

    }
}
export default MiComponente;