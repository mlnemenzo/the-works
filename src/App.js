import React, { Component } from 'react';
import axios from 'axios';
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

  // componentDidMount() {
  //   axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json#')
  //   .then(json => console.log(json.data.Results[0].Make_ID))
  //   .then(json => console.log(json.data.results.map(result => ({
  //     name: `${result.name.first} ${result.name.last}`,
  //     id: result.registered
  //   }))))
  //   .then(newData => this.setState({user : newData, id : newData}))
  //   .catch( error => alert(error));
    
  // }

  // filterNames(e) {
  //   this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))

  // }
  

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
            <Route path ="/payments" component={Payments}/>
            <Route path ="/services" component={Services}/>
            <Route path ="/disclaimer" component={Disclaimer}/>
        </div>
      <Footer />
    </div>
  );
  
  } 
}

export default App;
