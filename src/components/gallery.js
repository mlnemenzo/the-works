import React, { Component } from 'react';
import cars from '../assets/images/car.jpg';
import car2 from '../assets/images/car2.jpg';
import car3 from '../assets/images/car3.jpg';



class Gallery extends Component {



    render() {
        return (
            <div className="gallery-body">
                <h1 className="gallery-header">Gallery</h1>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={cars}/>
                            </div>
                            <div className="item active">
                                <img src={car2}/>
                            </div>
                            <div className="item active">
                            <img src={car3}/>
                            </div>                   
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
            </div>
        )
    }
}

export default Gallery;