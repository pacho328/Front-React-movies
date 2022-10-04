import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header></Header>

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/crear" component={CreateArticle} />
                    <Route exact path="/blog/editar/:id" component={EditArticle} />
                    <Route exact path="/blog/article/:id" component={Article} />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/peliculas" component={Peliculas} />
                    <Route exact path="/blog/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={
                        (props)=>{
                            var search = props.match.params.search;
                            return (<Redirect to={"/blog/busqueda/"+search} />)
                        }
                    } />

                    <Route exact path="/sincomponente" render={() => (
                        <React.Fragment>
                            <h1>
                                HOLA MUNDO!!!
                        </h1>
                            <MiComponente saludo="hola amigo"></MiComponente>
                        </React.Fragment>
                    )} />
                    <Route exact path="/pruebas/:id/:apellido?"
                        render={(props) => {
                            var id = props.match.params.id;
                            var apellido = props.match.params.apellido;
                            return (
                                <h1>Pagina de pruebas {id} {apellido}</h1>
                            )
                        }
                        }
                    />
                    <Route component={Error} />∆
                    </Switch>
                <Footer></Footer>
            </BrowserRouter>
        )
    }
}

export default Router;