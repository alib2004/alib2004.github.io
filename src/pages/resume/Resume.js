import React from "react";
import img from "../../assets/images/alibeygholeh.jpg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import './Resume.css'
const Resume = () => {
  return (
    <Container className="mt-5 resume-container">
        <Button href="https://jobvision.ir/cv/93632282-223334" target="_blank">Download CV</Button>
        <img src={img} className="my-5 img-fluid rounded w-90" alt="resume" />
    </Container>
  );
};

export default Resume;
