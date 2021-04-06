import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChantryMap from "./portfolio images/chantry.jpg";
import ChantryMap_DanesRefuge from "./portfolio images/dane's refuge.jpg";
import LotheringMapTopHalf from "./portfolio images/Lothering Top half.jpg";
import LotheringMapBottomHalf from "./portfolio images/lothering bottom half.png.jpg";
import RedRobinhoodLarge from "./portfolio images/Red EYES beg.png";
import BlueRobinhoodLarge from "./portfolio images/blue eyes beg.png";
import GroupCharacters from "./portfolio images/the group.png";

function CrudePhotoshops(){
    return (
        <div className="row ">
                <div className="col-md-2">
                    <img src={ChantryMap} alt="chantry"/>
                    <img src={ChantryMap_DanesRefuge} alt="dane's Reruge"/>
                </div>
                <div className="col-md-2">
                    <img src={LotheringMapTopHalf} alt="top-half"/>
                    <img src={LotheringMapBottomHalf} alt="bottom-halt"/>
                </div>
                <div className="col-md-4">
                    <img src={RedRobinhoodLarge} alt="red EYES"/>
                    <img src={BlueRobinhoodLarge} alt="blue EYES"/>
                </div>
                <div className="col-md-4">
                    <img src={GroupCharacters} alt="the group"/>
                </div>
            </div>
        
    )
}

export default CrudePhotoshops;