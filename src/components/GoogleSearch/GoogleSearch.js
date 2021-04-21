import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Saved from "./images/Saved.gif";
import Search from "./images/Search.png";
import SaveImg from "./images/Saved image.png"

function GoogleSearch() {
    return <div className="row">
    <div className="col-md-6">
        <p>Here is another project that's a React-based app with React components, helper/util functions, and React lifecycle methods to query and display books based on user searches. Also includes Node, Express, and MongoDB so that users can save books to review or purchase later.</p>
        <img src={Saved} alt="List of Books Saved"/>
        <p>
            <a className="websitelinks" href="https://whispering-meadow-30542.herokuapp.com/"> Google Books
            </a>
        </p>
        <p>
            <a className="websitelinks" href="https://github.com/Curtis-Hatter/Books"> Google Books Repository
            </a>
        </p>
    </div>
    <div className="col-md-6">
        <img src={Search}
            alt="List of books Called by API"/>
        <img src={SaveImg}
            alt="List of Books Saved"/>
    </div>
</div>
}

export default GoogleSearch;