import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Content from "../Content/Content";
import Contact from "../Contact/Contact";


function Portfolio() {
  
  

  return (
    <div>
      <Navbar />
      <AboutMe />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
