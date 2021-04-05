import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

  return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark color">
        <a className="navbar-brand" href="#Home">Curtis Hatter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Content">Portfolio </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
        </nav>
    );
  
    // return (
    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark color">
    //     <a className="navbar-brand" href="#Home">Curtis Hatter</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
    //         aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //         <ul className="navbar-nav">
    //             <li className="nav-item">
    //                 <a className="nav-link" href="#Home">Home</a>
    //             </li>
    //             <li className="nav-item active">
    //                 <a className="nav-link" href="#Content">Portfolio </a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link" href="#Contact">Contact</a>
    //             </li>
    //         </ul>
    //     </div>
    //     </nav>
    // );
  }
  
  // <span className="sr-only">(current)</span>
  export default Navbar;
