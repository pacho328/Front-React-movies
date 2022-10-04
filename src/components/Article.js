import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Siderbar from './SideBar';
import swal from 'sweetalert';
import Moment from 'react-moment';
import 'moment/locale/es';
class Article extends Component {
    url = Global.url;
    state = {
        article: false,
        status: null
    }
    UNSAFE_componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'getArticle/' + id).then(res => {
            this.setState({
                article: res.data.article,
                status: "success"
            })
        });
    }
    deleteArticle = () => {
        var id = this.props.match.params.id;
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            if (res.data) {
                                this.setState({
                                    article: res.data.article,
                                    status: "deleted"
                                })

                            } else {

                            }
                        })
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal(
                        'Articulo no fue borrado',
                        'Todavia conserva el articulo',
                        'success'
                    )
                }
            });

    }

    render() {
        if (this.state.status === "deleted") {
            return <Redirect to="/blog" ></Redirect>
        }
        return (
            <div className="center">
                <section id="content">
                    {this.state.article ?
                        (<article className="article-item article-detail"  >
                            <div className="image-wrap">
                                <img src={this.url + 'getimage/' + this.state.article.image} alt={this.state.article.title} />
                            </div>

                            <h2 className="subheader">{this.state.article.title}</h2>
                            <span className="date">
                                <Moment fromNow >{this.state.article.date}</Moment>
                            </span>
                            <Link  to={"/blog/editar/"+this.state.article._id} className="btn btn-danger">Editar</Link>
                            <button onClick={this.deleteArticle} to="/blog" className="btn btn-warning">Borrar</button>

                            <div className="clearfix"></div>
                        </article>) : (
                            <div id="article">
                                <h2 className="subheader">
                                    El articulo no existe
                                </h2>
                            </div>
                        )
                    }
                    {this.state.status == null &&

                        <div id="article">
                            <h2 className="subheader">
                                cargando ..
                                </h2>
                        </div>
                    }
                </section>
                <Siderbar />
            </div>
        )
    }
}

export default Article