import React, { Component } from 'react';
import Slider from './Slider';
import SiderBar from './SideBar'
import Articles from './Articles';
class Home extends Component {
    render() {

        return (
            <div id="home">
                <Slider
                    title="Bienvenido Francisco anacona"
                    bnt="ir a blog"
                    size="slider-big"
                ></Slider>
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos Articulos</h1>
                        <Articles home="true"></Articles>
                    </div>
                    <SiderBar></SiderBar>
                </div>
            </div>
        );

    }
}
export default Home;