import React, { Component } from 'react';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React_Bootstrap_Carousel } from 'react-bootstrap-carousel';
import theWorks from '../assets/images/the_works.jpg';
import tesla from '../assets/images/tesla.jpg';
import tesla2 from '../assets/images/tesla_mike.jpg';
import tesla3 from '../assets/images/tesla_front.jpg';
import tacoma from '../assets/images/tacoma_drivers_side.jpg';
import fj from '../assets/images/fj_drivers.jpg';
import fj2 from '../assets/images/fj_passenger.jpg';
import acura from '../assets/images/acura.jpg';
import before from '../assets/images/before.jpg';
import after from '../assets/images/after.jpg';

// const styles = { height: 400, width: "100%" };

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autoplay : true
        };

        
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
      };
      slideNext = () => {
        this.slider.slideNext();
      };
      slidePrev = () => {
        this.slider.slidePrev();
      };
      goToSlide = () => {
        this.slider.goToSlide(4);
      };
      autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
      };

      _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        if (leftIcon && rightIcon) {
          this.setState({
            leftIcon: undefined,
            rightIcon: undefined
          });
        } else {
          this.setState({
            leftIcon: <span className="fa fa-glass" />,
            rightIcon: <span className="fa fa-music" />
          });
        }
      };
    


    render() {

        let {leftIcon, rightIcon} = this.state;

        return (
            <div className="gallery-body">
                <h1 className="gallery-header" id= "gallery-header">Gallery</h1>
                <div className="row">
                    <div className="col-md-12" style={{ marginTop: 20 }}>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary" onClick={this.slidePrev}>
                                Slider prev
                            </button>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.slideNext}>
                                Slider next
                            </button>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.autoplay}>
                                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-12" style={{ marginTop: 20 }}>
                        <React_Bootstrap_Carousel
                            className = "carousel-fade"
                            animation={true}
                            autoplay={this.state.autoplay}
                            slideshowSpeed={5000}
                            leftIcon={leftIcon}
                            rightIcon={rightIcon}
                            onSelect={this.onSelect}
                            ref={r => (this.slider = r)}
                            version={4}
                            >
                            <div style={{ height: 500 }}>
                                <img style={{ width: "500", height: "100%" }} src={theWorks} alt = "img not available"/>
                            <div className="carousel-caption">Our mobile service vehicle</div>
                            </div>
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {tesla} alt = "img not available"/>
                            <div className="carousel-caption">Tesla Ceramic Coating</div>
                            </div>  
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {tesla2} alt = "img not available"/>
                            <div className="carousel-caption">Tesla and Mike, Coating Process</div>
                            </div>
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {tesla3} alt = "img not available"/>
                            <div className="carousel-caption">Tesla Completed Coating</div>
                            </div>
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {tacoma} alt = "img not available"/>
                            <div className="carousel-caption">Toyota Tacoma Polish/ Paint Correction</div>
                            </div> 
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {fj} alt = "img not available"/>
                            <div className="carousel-caption">Toyota FJ Cruiser Paint Correction</div>
                            </div>  
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {fj2} alt = "img not available"/>
                            <div className="carousel-caption">Toyota FJ Cruiser Paint Correction</div>
                            </div>
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {before} alt = "img not available"/>
                            <div className="carousel-caption">Acura TSX before headlight restoration</div>
                            </div> 
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {after} alt = "img not available"/>
                            <div className="carousel-caption">Acura TSX after headlight restoration</div>
                            </div> 
                            <div style = {{ height: 500 }}>
                                <img style={{ width: "500", height: "100%"}} src = {acura} alt = "img not available"/>
                            <div className="carousel-caption">Acura TSX Polish/ Paint Correction</div>
                            </div>             
                        </React_Bootstrap_Carousel>
                  </div>
                  
                </div>

         </div>   
        )
    }
}

export default Gallery;