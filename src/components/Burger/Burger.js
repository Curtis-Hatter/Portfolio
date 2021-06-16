import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BurgerWebPage from "./portfolio images/Artboard 1.png";
import BurgerWebPageBottom from "./portfolio images/Artboard 2.png";
import CharacterTavern from "./portfolio images/Character Tavern.gif";

function Burger() {
    return (<div className="row">
    <div className="col-md-6">
        <img src={BurgerWebPage} alt="Full Stack Burger Web Page"/>
        <img src={BurgerWebPageBottom} alt="Full Stack Burger Web Page bottom"/>
    </div>
    <div className="col-md-6">
        <p>This is the creme de la creme! A full stack website utilizing everything I've learned. This application takes out the problems of creating a character in Dungeons and Dragons 5th edition. Utilizing authentication, react, node.js, and a database. This application shows it all! Check it out!</p>
        <img alt="Tavern Website"
            src={CharacterTavern}
            ></img>
        <p>
            <a className="websitelinks" href="https://character-creator-tavern.herokuapp.com/">
                Tavern Website </a>
        </p>
        <p>
            <a className="websitelinks" href="https://github.com/Hammonds526/CharacterCreator">
                Tavern Repository </a>
        </p>
    </div>
</div>)
}

export default Burger;