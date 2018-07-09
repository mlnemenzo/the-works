import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shown: false
        };

        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        const {shown} = this.state;
        this.setState({
            shown: !shown
        });
    }

    render() {

        const {shown} = this.state;
        let btnClass = "collapse navbar-collapse";
        if(shown) {
            btnClass = "collapse navbar-collapse show";
        }

        return (
            <div className = "header-body col-12">
                {/* <h1 className="header">The Works Auto Detailing and Reconditioning</h1> */}
                <nav className="navbar header-container fixed-top navbar-expand-md navbar-dark blacker" onClick={this.toggleNav}>
                    <button onClick={this.toggleNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className={btnClass} id="navbarContent"> 
                            <div className = "overlay"onClick = {this.toggleNav}>
                            </div>
                            <ul className="navbar-nav  nav-fill w-100 align-items-start">
                                <div className={btnClass} id="navbarContent">
                            <ul className="navbar-nav  nav-fill w-100 align-items-start">
                            <Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-text boldLink" to="/" onClick={this.toggleNav}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-text boldLink" to="/services" onClick={this.toggleNav}>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-text boldLin" to="/gallery" onClick = {this.toggleNav}>Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-text boldLink" to="/appointment" onClick={this.toggleNav}>Appointments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-text" to="/payments" onClick = {this.toggleNav}>Payments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-text boldLink" to="/contact" onClick={this.toggleNav}>Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-text" to="/about-us" onClick = {this.toggleNav}>About Us</Link>
                                </li>
                            </Fragment>
                                </ul>
                            </div>
                                </ul>
                        </div> 
                </nav>

                {/* <Fragment>
                <nav className="navbar header-container fixed-top navbar-expand-md navbar-dark blacker" >
                    <button onClick={this.toggleNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className=" d-md-none mx-auto titanicFont h1 headerTitle goldenFont" href="/">Juice Query</a>
                    <div className={btnClass} id="navbarContent">
                        <ul className="navbar-nav  nav-fill w-100 align-items-start">
                            <li className="nav-item">
                                <Link className="nav-link nav-link-text boldLink" to="/" onClick={this.toggleNav}>Home</Link>
                            </li>
                            {this.renderAuthLinks()}
                        </ul>
                    </div>
                </nav>
            </Fragment> */}
            </div>
        )
    }
}

export default Header;

