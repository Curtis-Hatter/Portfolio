import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Linkedin from "./contact images/linkedin-logo.png";
import Indeed from "./contact images/indeed.png";
import GitHub from "./contact images/GitHub-Mark.png";
import Resume from "./contact images/20180707_171406 crop.jpg";
import ResumePDF from "./contact images/Curtis-Hatter.pdf";
import "./style.css";

function Contact() {

    return <div className="margins">
    <div className="container contact-form" id="Contact">
    <h1>Contact Form</h1>
    <hr/>
    <div className="row">
        <div className="col-md-6">
            <address>
                <p>Riverside, CA</p>
                <p>Email:- sitrucrettah1@gmail.com</p>
                <p>Phone:- (951) 288-8177</p>
            </address>
            <br/>
            <section className="row">
                <div className="col-md-3">
                    <a href="https://www.linkedin.com/in/curtis-hatter-872b19154/">
                        <img className="tokens" alt="Linkedin:Curtis Hatter link"
                            src={Linkedin}/>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="https://my.indeed.com/p/curtish-r5kd5uw">
                        <img className="tokens" alt="Indeed:Curtis Hatter link"
                            src={Indeed}/>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="https://github.com/Curtis-Hatter">
                        <img className="tokens" alt="Github:Curtis Hatter link"
                            src={GitHub}/>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href={ResumePDF}>
                        <img className="tokens" alt="Resume:Curtis Hatter link"
                            src={Resume}/>
                    </a>
                </div>
            </section>
        </div>

        <section className="col-md-6">
            <form action="mailto: sitrucrettah1@gmail.com" method="POST" encType="text/plain">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="mail" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" name="comment" rows="3"></textarea>
                </div>
                <button type="submit" value="send" className="btn btn-primary btn-md btn-block">Send</button>
            </form>
        </section>
    </div>
</div>
</div>
}

export default Contact;