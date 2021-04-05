import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Curtis from "../../Assets/Images/74091_169137416431427_8135311_n.png"

function AboutMe() {
  
    return (
        <div className="container margins" id="Home">
        <div className="row">
            <img src={Curtis} alt="Male with mustache standing proudly" className="col-lg Curtis"/>
            <div className="col-lg">
                <div className="row">
                    <h1>About Me</h1>
                    <p>
                        I'm a mathematician and developer who found
                        themselves excelling at accounting, business
                        management, and financial consultation.
                    </p>
                </div>
                <h3>Skills</h3>
                <ul>
                    <li>
                        Structured and object-oriented progamming in C++/C#
                    </li>
                    <li>
                        Microsoft Office software: Excel, Word, and Powerpoint
                    </li>
                    <li>
                        Accounting/Business management software: QuickBooks Desktop/Online
                    </li>
                </ul>
                <h3>Education</h3>
                <p>
                    Bachelor of Science: March 2016<br/>
                    General Applied Mathematics<br/>
                    University of California, Riverside - Riverside, CA
                </p>
                <p>
                    Udemy Certificate: August 2020<br/>
                    Complete C# Masterclass<br/>
                    &copy 2020 Udemy, Inc.
                </p>
                <h3>Interests</h3>
                <p>
                    I enjoy most, if not all, forms of creative mediums;
                    I particularly enjoy music, movies, dancing, and roleplaying.
                    Currently I'm enjoying Dungeons and Dragons 5th edition with my immediate relatives,
                    especially since I'm the dungeon master and am running the campaign.
                </p>
            </div>
        </div>
    </div>
    );
  }
  
  export default AboutMe;