import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import LandingPage from './components/landing-page';
import AboutUs from './components/about-us';
import Appointment from './components/appointment';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Payments from './components/payments';
import Services from './components/services';
import Disclaimer from './components/disclaimer';
import Footer from './components/footer';


class App extends Component {

  constructor(props) {
    super(props)

      this.state = {
        users : [],
        store : []
      }
  }
  
  render() {
  return (
    <div className="App">
      <Header />
        <div className = "page-header"></div>
        <div className="container main-app-body">
            <Route exact path="/" component={LandingPage}/>
            <Route path ="/about-us" component={AboutUs}/>
            <Route path ="/appointment" component={Appointment}/>
            <Route path ="/contact" component={Contact}/>
            <Route path ="/gallery" component={Gallery}/>
            <Route path ="/services" component={Services}/>
            <Route path ="/disclaimer" component={Disclaimer}/>
        </div>
      <Footer />
    </div>
  );
  
  } 
}

export default App;
