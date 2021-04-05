import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Content from "../Content/Content";
import Contact from "../Contact/Contact";


function Portfolio() {
  
  const anchor = document.getElementById('#Contact');
  console.log(anchor);
  // anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <div>
      <Navbar />
      <AboutMe />
      <Content id="Content" />
      <Contact id="Contact"/>
      <Footer />
    </div>
  );
}

export default Portfolio;
