import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import SiderBar from './SideBar'

class Peliculas extends Component {
    state = {}

    componentWillMount() {
        this.setState({
            peliculas: [
                {
                    titulo: "Joker",
                    image: "https://www.futuro.cl/wp-content/uploads/2020/02/joker-avengers-590x340.jpg"
                },
                {
                    titulo: "jojo rabit",
                    image: "https://es.web.img3.acsta.net/pictures/20/01/17/08/50/0932472.jpg"
                }
            ],
            favoritas: {}
        })
    }

    cambiar_titulo() {
        var { peliculas } = this.state;
        peliculas[0].titulo = "cambio";
        this.setState({
            peliculas
        })
    }
    favorita = (pelicula) => {

        this.setState({
            favoritas: pelicula
        })
    }
    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        var favorita;
        if (this.state.favoritas.titulo) {
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong>
                        La pelicula favorita es:
                </strong>
                    <span>{this.state.favoritas.titulo}</span>

                </p>)
        } else {
            favorita = (<p>
                oscar: parisite
            </p>)
        }
        return (
            <React.Fragment>
                <Slider
                    title="Peliculas"
                    size="slider-small"
                ></Slider>
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">
                            Peliculas
                </h2>
                        <p>
                            <button onClick={this.cambiar_titulo.bind(this)} > cambiar</button>
                        </p>
                        {/* { this.state.favoritas.titulo ? (
                    <p className="favorita" style={pStyle}>
                    <strong>
                        La pelicula favorita es:
                    </strong>
                <span>{this.state.favoritas.titulo}</span>

                    </p>) :(
                        <p>
                            oscar: parisite
                        </p>
                    )
                } */}
                        {favorita}
                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            favoritama={this.favorita}
                                        ></Pelicula>

                                    )
                                })
                            }
                        </div>

                    </div>
                    <SiderBar
                        
                    ></SiderBar>

                </div>
            </React.Fragment>
        )
    }
}

export default Peliculas;