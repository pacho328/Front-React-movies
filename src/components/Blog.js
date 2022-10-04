import React, { Component } from 'react';
import Slider from './Slider';
import SiderBar from './SideBar';
import Articles from './Articles';
class Blog extends Component {

    render() {
        return (
            <div id="home">
                <Slider
                    title="Blog"
                    size="slider-small"
                ></Slider>
                <div className="center">
                    <div id="content">
                        <Articles></Articles>
                    </div>
                    <SiderBar
                       blog="true"
                    ></SiderBar>
                </div>
            </div>
        );

    }
}
export default Blog;