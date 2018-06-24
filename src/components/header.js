import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="header">The Works Auto Detailing</h1>
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-text boldLink" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-text boldLink" to="/services" onClick={this.toggleNav}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-text boldLink" to="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-text boldLink" to="/appointment" onClick={this.toggleNav}>Appointments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-text" to="/payments">Payments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-text boldLink" to="/contact" onClick={this.toggleNav}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-text" to="/about-us">About Us</Link>
                    </li>
                </Fragment>
            </div>
        )
    }
}

export default Header;

/* home / services / about us / gallery / appointment / coming soon / pay now / contact */