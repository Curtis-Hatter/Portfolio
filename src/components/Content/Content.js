import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import wireframe1 from "./portfolio images/wireframe1.jpg";
import wireframe2 from "./portfolio images/wireframe2.jpg";
import newPackage from "./portfolio images/final-newPackage.png";
import BurgerWebPage from "./portfolio images/Artboard 1.png";
import BurgerWebPageBottom from "./portfolio images/Artboard 2.png";
import Luben from "./portfolio images/92e78d29868b2fe65c13bc68255e9a44.jpg";
import LubenMin from "./portfolio images/Luben p.png";
import LubenMoonShoes from "./portfolio images/811x6E1vDzL._AC_SL1500_.png";
import DarkTiefling from "./portfolio images/Ian.png";
import WaterElf from "./portfolio images/ruby.png";
import RedRobinhood from "./portfolio images/Red EYES.png";
import BlueRobinhood from "./portfolio images/blue eyes.png";
import DarkHalfling from "./portfolio images/sav_halfling.png";
import HumanMale from "./portfolio images/human-male.png";
import ChantryMap from "./portfolio images/chantry.jpg";
import ChantryMap_DanesRefuge from "./portfolio images/dane's refuge.jpg";
import LotheringMapTopHalf from "./portfolio images/Lothering Top half.jpg";
import LotheringMapBottomHalf from "./portfolio images/lothering bottom half.png.jpg";
import RedRobinhoodLarge from "./portfolio images/Red EYES beg.png";
import BlueRobinhoodLarge from "./portfolio images/blue eyes beg.png";
import GroupCharacters from "./portfolio images/the group.png";

function Content() {
  
  return (
    <div id="Content">
      <div className="container">
        <div>
            <h1>Content</h1>
            <h5>I have several websites with various functionalities</h5>
            <br/>
            <div className="row">
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
                        alt="A Gif showing the Coding Quiz Functionality"/>
                </div>
            </div>
            <br/>
            <h5>Another project that I've been working is a song-translator</h5>
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://raw.githubusercontent.com/Curtis-Hatter/Song-Translation-Application/main/assets/Song-Translation-Application_SS1.jpeg"
                        alt="Front Page to the Song Translator Website"/>
                    <img src="https://github.com/Curtis-Hatter/Song-Translation-Application/raw/main/assets/Song-Translation-Application_SS2.jpeg"
                        alt="Song Translator Website Functionality"/>
                </div>
                <div className="col-md-6">
                    <p>This is a corky idea where we pass in some song lyrics and translate them into some funny
                        translation: your choice from speaking pirate to Hoder from Game of Thrones</p>
                    <img src="https://github.com/Curtis-Hatter/Song-Translation-Application/raw/main/assets/Song-Translation-Application_SS3.jpeg"
                        alt="Song Translator Website Functionality Number 2"/>
                    <p>
                        <a className="websitelinks" href="https://curtis-hatter.github.io/Song-Translation-Application/">
                            Song-Translation-Application Website </a>
                    </p>
                    <p>
                        <a className="websitelinks" href="https://github.com/Curtis-Hatter/Song-Translation-Application">
                            Song-Translation-Application Repository </a>
                    </p>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <img src={BurgerWebPage} alt="Full Stack Burger Web Page"/>
                    <img src={BurgerWebPageBottom} alt="Full Stack Burger Web Page bottom"/>
                </div>
                <div className="col-md-6">
                    <p>This is another stupid one but in fact a full stack website with an MVC (Model View Controller)
                        structure. It allows users to store and eat burgers while always being saved in a database. It
                        may not seem like much but there's actually a lot going on here, even with the crude rainbow
                        effects. Check it out!</p>
                    <iframe title="Burger Website"width="420" height="315"
                        src="https://www.youtube.com/watch?v=msvdn95x9OM&feature=youtu.be&ab_channel=TheBootCamp"
                        alt="Full Stack Burger Web Page Video"></iframe>
                    <p>
                        <a className="websitelinks" href="https://dry-peak-79203.herokuapp.com/">
                            Burgers Website </a>
                    </p>
                    <p>
                        <a className="websitelinks" href="https://github.com/Curtis-Hatter/burger">
                            Burgers Repository </a>
                    </p>
                </div>
            </div>

            <hr className="hr-black"/>
            <h5>If my web developing doesn't suit your needs, I also deal with photoshop for Dungeons and Dragons
                enthusiasts</h5>
            <div className="row ">
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
            </div>
            
            <h5>
                Most of the time though, people send me their art or some other asset and I make a token for them.
            </h5>
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
            <h5>
                Contact me if you'd like maps, icons, or crudely photoshopped sprites.
            </h5>
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
        </div>
    </div>
    </div>
  );
}

export default Content;