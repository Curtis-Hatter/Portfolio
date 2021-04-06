import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function SongTranslator(){
    return <div className="row">
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
}

export default SongTranslator;