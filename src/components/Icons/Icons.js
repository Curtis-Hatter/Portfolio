import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkTiefling from "./portfolio images/Ian.png";
import WaterElf from "./portfolio images/ruby.png";
import RedRobinhood from "./portfolio images/Red EYES.png";
import BlueRobinhood from "./portfolio images/blue eyes.png";
import DarkHalfling from "./portfolio images/sav_halfling.png";
import HumanMale from "./portfolio images/human-male.png";

function Icons(){
    return (
        // Characters.map(character => {
        //     return(
        //     <div className="col-md-2">
        //     <img className="tokens" src={character.image} alt={character.name}/>
        //     </div>
        //     )
        // })
        <div className="row ">
                <div className="col-md-2">
                    <img className="tokens" src={DarkTiefling} alt="Large-Dark-Man"/>
                </div>
                <div className="col-md-2">
                    <img className="tokens" src={WaterElf} alt="Medium-Blue-Elf"/>
                </div>
                <div className="col-md-2">
                    <img className="tokens" src={RedRobinhood}
                        alt="Robin Hood with red eye patch"/>
                </div>
                <div className="col-md-2">
                    <img className="tokens" src={BlueRobinhood}
                        alt="Robin Hood with blue eye patch"/>
                </div>
                <div className="col-md-2">
                    <img className="tokens" src={DarkHalfling} alt="small-Halfling"/>
                </div>
                <div className="col-md-2">
                    <img className="tokens" src={HumanMale} alt="Human-Male"/>
                </div>
            </div>
        
    )
}

export default Icons;