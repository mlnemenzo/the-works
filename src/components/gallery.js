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

const styles = { height: 400, width: "100%" };

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
                {/* <h1 className="gallery-header">Gallery</h1>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="d-block w-100" src={cars} alt="First slide"/>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={car2} alt="Second slide"/>
                </div>
                <div className="carousel-item active">
                    <img className="d-block w-100" src={car3}alt="Third slide"/>
                </div>               
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>  */}
                <div className="row">
                    <div className="col-md-12" style={{ marginTop: 20 }}>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary" onClick={this._changeIcon}>
                                Change Icon
                            </button>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.slidePrev}>
                                Slider prev
                            </button>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.slideNext}>
                                Slider next
                            </button>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.goToSlide}>
                                Go to slide 4
                            </button>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.autoplay}>
                                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-12" style={{ marginTop: 20 }}>
                        <React_Bootstrap_Carousel
                        animation={true}
                        autoplay={this.state.autoplay}
                        slideshowSpeed={7000}
                        leftIcon={leftIcon}
                        rightIcon={rightIcon}
                        onSelect={this.onSelect}
                        ref={r => (this.slider = r)}
                        version={4}
                        >
                        <div style={{ height: 500 }}>
                            <img style={{ width: "500", height: "100%" }} src={theWorks}/>
                        <div className="carousel-caption">Test</div>
                      </div>
                      <div style = {{ height: 500 }}>
                            <img style={{ width: "500", height: "100%"}} src = {tesla}/>
                        <div className="carousel-caption">Test2</div>
                      </div>  
                      <div style = {{ height: 500 }}>
                            <img style={{ width: "500", height: "100%"}} src = {tesla2}/>
                        <div className="carousel-caption">Test2</div>
                      </div>
                      <div style = {{ height: 500 }}>
                            <img style={{ width: "500", height: "100%"}} src = {tesla3}/>
                        <div className="carousel-caption">Test2</div>
                      </div>
                      <div style = {{ height: 500 }}>
                            <img style={{ width: "500", height: "100%"}} src = {tacoma}/>
                        <div className="carousel-caption">Test2</div>
                      </div> 
                      <div style = {{ height: 500 }}>
                            <img style={{ width: "500", height: "100%"}} src = {fj}/>
                        <div className="carousel-caption">Test2</div>
                      </div>  
                      <div style = {{ height: 500 }}>
                            <img style={{ width: "500", height: "100%"}} src = {fj2}/>
                        <div className="carousel-caption">Test2</div>
                      </div>        
                      {/* <div style={{ ...styles, backgroundColor: "lightblue" }}>
                        <span>text</span>
                        <div className="carousel-caption">Text</div>
                      </div>
                      <div style={{ ...styles, backgroundColor: "lightblue" }}>
                        <div className="carousel-center">
                          <iframe
                            style={{ width: 500 }}
                            height="250"
                            src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                            frameBorder="0"
                            allowFullScreen
                          />
                        </div>
                        <div className="carousel-caption">Youtube</div>
                      </div> */}
                    </React_Bootstrap_Carousel>
                  </div>
                  
                </div>

         </div>   
        )
    }
}

export default Gallery;