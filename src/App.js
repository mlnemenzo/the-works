import React from 'react';
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
import Footer from './components/footer';


const App = () => {

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
              <Route path ="/payments" component={Payments}/>
              <Route path ="/services" component={Services}/>
          </div>
        <Footer />
      </div>
    );
  
}

export default App;
