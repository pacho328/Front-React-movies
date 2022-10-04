import React, { Component } from 'react';
import Slider from './Slider';
import SiderBar from './SideBar';
import Articles from './Articles';
class Search extends Component {

    render() {
        var busqueda = this.props.match.params.search;

        return (
            <div id="home">
                <Slider
                    title={'Busqueda: ' +busqueda}
                    size="slider-small"
                ></Slider>
                <div className="center">
                    <div id="content">
                        <Articles
                            search={busqueda}
                        ></Articles>
                    </div>
                    <SiderBar
                       
                    ></SiderBar>
                </div>
            </div>
        );

    }
}
export default Search;