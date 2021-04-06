import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import wireframe1 from "./portfolio images/wireframe1.jpg";
import wireframe2 from "./portfolio images/wireframe2.jpg";
import newPackage from "./portfolio images/final-newPackage.png";

function Trackstar() {
    return <div className="row">
    <div className="col-md-6">
        <p>One of my favorites is this all in one package tracking website that maintains a database of all the packages a user may have. Showing each package a return value of whether the package was create, in transit, or delivered.</p>
        <img src={wireframe1} alt="Track Star Wireframe"/>
        <p>
            <a className="websitelinks" href="https://track-star-2021.herokuapp.com/"> TRACK-STAR Website
            </a>
        </p>
        <p>
            <a className="websitelinks" href="https://github.com/Curtis-Hatter/TRACK-STAR"> TRACK-STAR Repository
            </a>
        </p>
    </div>
    <div className="col-md-6">
        <img src={wireframe2}
            alt="Track Star Website Login Page"/>
        <img src={newPackage}
            alt="Track Star Website Package Track Page"/>
    </div>
</div>
}

export default Trackstar;