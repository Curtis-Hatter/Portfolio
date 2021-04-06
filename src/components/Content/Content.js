import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Trackstar from "../TrackStar/Trackstar";
import SongTranslator from "../SongTranslator/SongTranslator";
import Burger from "../Burger/Burger";
import Lubens from "../Lubens/Lubens";
import Icons from "../Icons/Icons";
import CrudePhotoshops from "../CrudePhotoshops/CrudePhotoshops";


function Content() {
  
  return (
    <div className="margins" id="Content">
      <div className="container">
        <div>
            <h1>Content</h1>
            <h5>I have several websites with various functionalities</h5>
            <br/>
            <Trackstar/>
            <br/>
            <h5>Another project that I've been working is a song-translator</h5>
            <br/>
            <SongTranslator />
            <br/>
            <Burger />            
            <hr className="hr-black"/>
            <h5>If my web developing doesn't suit your needs, I also deal with photoshop for Dungeons and Dragons
                enthusiasts</h5>
            <Lubens />
            <h5>
                Most of the time though, people send me their art or some other asset and I make a token for them.
            </h5>
            <Icons/>
            <h5>
                Contact me if you'd like maps, icons, or crudely photoshopped sprites.
            </h5>
            <CrudePhotoshops />
        </div>
    </div>
    </div>
  );
}

export default Content;