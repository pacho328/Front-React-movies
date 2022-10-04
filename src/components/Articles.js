import React, { Component } from 'react';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import axios from 'axios';
import {Link} from 'react-router-dom';
import defimage from '../assets/images/Rhapsodia.jpg';

class Articles extends Component {
    url = Global.url;
    state = {
        articles: {

        },
        status: null
    }

    UNSAFE_componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;
        
        if(home==="true"){
            this.getArticlesLast();
          
        }else if(search && search!== null){
            this.search();
        }
        else{
            this.getArticles();
        }
    }

    getArticles = () => {
        axios.get(this.url+"getArticles").then(res => {
            this.setState({
                articles: res.data.articles,
                status: "success"
            })

        }).catch(err => {
            console.log(err);
        })
    }
    getArticlesLast = () => {
        axios.get(this.url+"getArticles/last").then(res => {
            this.setState({
                articles: res.data.articles,
                status: "success"
            })

        }).catch(err => {
            console.log(err);
        })
    }
     search = () => {
         var strin = this.props.search;
        axios.get(this.url+"search/"+strin).then(res => {
            this.setState({
                articles: res.data.articles,
                status: "success"
            })

        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div id="home">
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Articulos</h1>
                        {this.state.status === "success" ?(
                            <div>

                                {this.state.articles.map((article, i) => {
                                    return (
                                        <article className="article-item" id="article-template" key={i}>
                                        <div className="image-wrap">
                                            {article.image !== null ?
                                                (<img src={this.url+'getimage/'+article.image} alt={article.title}/>)
                                                :( <img src={defimage} alt={article.title}/>)    
                                            }
                                            
                                        </div>

                                        <h2 className="subheader">{article.title}</h2>
                                        <span className="date">
                                            <Moment fromNow >{article.date}</Moment> 
                                         </span>
                                        <Link to={'/blog/article/'+article._id}>Leer mas</Link>
                                        <div className="clearfix"></div>
                                    </article>
                                    )
                                })}
                            </div>
                            ): (
                                <div>
                                    <p>
                                        No hay articulos
                                    </p>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        );

    }
}
export default Articles;