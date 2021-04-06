import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Luben from "./portfolio images/92e78d29868b2fe65c13bc68255e9a44.jpg";
import LubenMin from "./portfolio images/Luben p.png";
import LubenMoonShoes from "./portfolio images/811x6E1vDzL._AC_SL1500_.png";

function Lubens() {
    return (<div className="row ">
    <div className="col-md">
        <p>
            I typically use an image for inspiration.
        </p>
        <img src={Luben}
            alt="Original Luben gmbingder.com"/>
    </div>
    <div className="col-md">
        <p>
            At times, I'll reformat it for a minimilist style.
        </p>
        
        <img id="minimilist" src={LubenMin}
            alt="Luben creative minimilist art"/>
    </div>
    <div className="col-md">
        <p>
            Or simply make crude images to reference the adventures my friends and I have
        </p>
        <img src={LubenMoonShoes}
            alt="Luben Moon Shoes crude photoshop"/>
    </div>
</div>)
}

export default Lubens;