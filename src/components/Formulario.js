import React, { Component } from 'react';
import Slider from './Slider';
import SiderBar from './SideBar'
class Formulario extends Component {

    nameRef = React.createRef();    
    apellidosRef = React.createRef();    
    bioRef = React.createRef();    
    generoHombreRef = React.createRef();    
    generoMujerRef = React.createRef();    
    generoOtroRef = React.createRef();  
    
    state= {
        user: {}
    }
    recibirFormulario = (e)=>{
        e.preventDefault();
        var genero = "hombre";
        if(this.generoHombreRef.current.checked){
            genero = "Hombre"
        }else if(this.generoMujerRef.current.checked){
            genero = "Mujer"
            
        }else {
            genero = "Otro"
        }

        var user ={
            nombre: this.nameRef.current.value,
            apellido: this.apellidosRef.current.value,
            biografia: this.bioRef.current.value,
            genero: genero,
        }
        this.setState({
            user: user
        })
        
    }
    render() {

        return (
            <div id="formularios">
                <Slider
                    title="Formulario"
                     size="slider-small"   
                ></Slider>
                {this.state.user.nombre &&
        (  
            <div id="user">
                <p>{this.state.user.nombre}</p>
            </div>
         )

                }
                <div className="center"onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                    <div id="content">
                    <form className="mid-form">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" ref={this.nameRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellidos"  ref={this.apellidosRef}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biografia</label>
                            <textarea name="bio"  ref={this.bioRef}></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/> Hombre 
                            <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}/> Mujer 
                            <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} /> Otro
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                   </form>
                    </div>
                    <SiderBar
                       
                    ></SiderBar>
                </div>
            </div>
        );

    }
}
export default Formulario;