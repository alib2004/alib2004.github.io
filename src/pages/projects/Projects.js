/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import taskserviceimg from "../../assets/images/taskservices.webp";
import shoesshopimg from "../../assets/images/shoesshop.webp";
import marketinglandingimg from "../../assets/images/marketinglanding.webp";
import fooladhounamimg from "../../assets/images/fooladhounam.webp";
import fooladpishtazimg from "../../assets/images/fooladpishtaz.webp";
import Laptopimg from "../../assets/images/Laptop-Screen.webp";
import minimalimg from "../../assets/images/landing-minimal.webp";
import swipe from "../../assets/images/swipe.webp";
import "./Projects.css";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  const [myproject, setMyproject] = useState([
    {
      id: 1,
      title: "Tasks Service",
      desc: "i create this site with HTML , CSS , Js , Bootstrap and Aos library",
      github: "https://github.com/alib2004/TaxService",
      demo: "https://alib2004.github.io/TaxService/",
      img: taskserviceimg,
    },
    {
      id: 2,
      title: "marketing landing",
      desc: "Designed this site with HTML , CSS , Js , Bootstrap and animate icons",
      github: "https://github.com/alib2004/marketing-landing",
      demo: "https://alib2004.github.io/marketing-landing/",
      img: marketinglandingimg,
    },
    {
      id: 4,
      title: "foolad pishtaz",
      link: "https://fooladpishtaz.com",
      desc: "Designed and launched a WordPress website for a steel company",
      img:fooladpishtazimg
    },
    {
      id: 5,
      title: "foolad hounam",
      link: "https://fooladhounam.ir",
      desc: "Designed and launched a WordPress website for a steel company",
      img:fooladhounamimg
    },
    {
      id: 5,
      title: "Laptop Shop",
      link: "http://pclaptopstore.ir/",
      desc: "Designed and launched this site with wordpress my portfolio not company",
      img:Laptopimg 
    },
    {
      id: 6,
      title: "Minimal Landing",
      github: "https://github.com/alib2004/minimal_landing/",
      link: "https://alib2004.github.io/minimal_landing/",
      desc: "Designed a minimal landing page using pure CSS, without any frameworks or libraries",
      img:minimalimg
    },
    {
      id: 7,
      title: "Swipe Landing",
      github: "https://github.com/alib2004/swipe/",
      link: "https://alib2004.github.io/swipe/",
      desc: "Built a responsive swipe-style landing page using Tailwind CSS, featuring automatic dark/light mode based on user preferences",
      img:swipe
    },
  ]);
  return (
    <div className="project">
      <h1 className="project-title">
        My <span className="purple">Works</span>
      </h1>
      <Container>
        <Row className="gy-4 my-4">
          <ProjectItem myproject={myproject}/>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
