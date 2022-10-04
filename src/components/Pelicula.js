import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Pelicula extends Component {
    marcar = () =>{
        this.props.favoritama(this.props.pelicula)
    }
    
    render() {
        const pelicula = this.props.pelicula;
        const { titulo, image } = pelicula;
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2 className="subheader">{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
            </span>
                <Link>Leer mas</Link>
                <button onClick={this.marcar}>
                        Favorita
                </button>
                <div className="clearfix"></div>
            </article>
        )
    }

}

export default Pelicula;