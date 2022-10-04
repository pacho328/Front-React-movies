import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Slider extends Component {
    render() {
        return (
            <div className="slider">
                <div id="slider" className={this.props.size}>
                    <h1>{this.props.title}</h1>
                    {this.props.bnt  &&
                     (
                        <Link to="/blog" className="btn-white">{this.props.bnt}></Link>
                     )
                    }
                </div>
            </div>
        )
    }
}

export default Slider;