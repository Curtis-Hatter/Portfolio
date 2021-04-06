import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BurgerWebPage from "./portfolio images/Artboard 1.png";
import BurgerWebPageBottom from "./portfolio images/Artboard 2.png";

function Burger() {
    return (<div className="row">
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
</div>)
}

export default Burger;