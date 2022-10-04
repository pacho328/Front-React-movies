import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import swal from 'sweetalert';
import SiderBar from './SideBar';
import SimpleReactValidator from 'simple-react-validator';

class EditArticle extends Component {
    url = Global.url;
    titleRef = React.createRef();
    contenidoRef = React.createRef();
    articleId = null;
    state = {
        article: {},
        status: null,
        selectedFile: null
    }
    UNSAFE_componentWillMount() {
        this.articleId = this.props.match.params.id
        this.getArticle();
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es obligatorio'
            }
        });
    }

    getArticle = () => {
        axios.get(this.url + 'getArticle/' + this.articleId).then(res => {
            this.setState({
                article: res.data.article,
                status: "GET"
            })
        });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contenidoRef.current.value,
                image: this.state.article.image
            }
        })
    }

    saveArticle = (e) => {
        e.preventDefault();
        this.changeState();
        if (this.validator.allValid()) {
            axios.put(this.url + 'getArticle/'+this.articleId, this.state.article)
                .then(res => {
                    if (res.data) {
                        this.setState({
                            article: res.data.article,
                            status: "waiting"
                        })
                        if (this.state.selectedFile !== null) {
                            var articleId = this.state.article._id;
                            
                            const formData = new FormData();
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );
                            axios.post(this.url + 'uploadimage/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        })
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        })
                                    }

                                }).catch(err => {
                                    console.log(err.data);

                                })
                            swal(
                                'Articulo Creado',
                                'El a articulo ha sido creado correctamemte',
                                'success'
                            )
                        } else {
                            this.setState({
                                status: "success"
                            })
                        }

                    }
                    else {
                        this.setState({
                            status: "failed"
                        })
                    }
                }).catch(err=>{
                    console.log(err);
                    
                })
        } else {
            this.setState({
                status: "failed"
            })
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    fileChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })

    }

    render() {
        if (this.state.status === 'success') {
            return <Redirect to="/blog" />
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader"> Editar Articulo</h1>
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={this.state.article.title} ref={this.titleRef} onChange={this.changeState} />
                                {this.validator.message('title', this.state.article.title, 'required|string')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" defaultValue={this.state.article.content} ref={this.contenidoRef} onChange={this.changeState}></textarea>
                                {this.validator.message('content', this.state.article.content, 'required|')}

                            </div>
                            <div className="form-group">
                                <div className="image-wrap">
                                    <img src={this.url + 'getimage/' + this.state.article.image} alt={this.state.article.title} />
                                </div>
                                <label htmlFor="image">Image</label>
                                <input type="file" name="file0" onChange={this.fileChange} />
                            </div>
                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </form>
                    
              

                </section>
                <SiderBar>

                </SiderBar>
            </div>
        )
    }

}

export default EditArticle;