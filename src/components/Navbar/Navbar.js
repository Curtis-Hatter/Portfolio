import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark color">
        <a className="navbar-brand" href="index.html">Curtis Hatter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="portfolio.html">Portfolio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
        </nav>
    );
  }
  
  export default Navbar;
