import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/images/about.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaRegHandPointRight,
  FaWordpress,
  FaSass,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbSeo } from "react-icons/tb";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobepremierepro,
} from "react-icons/si";
import "./About.css";
const About = () => {
  return (
    <div className="aboutme">
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="aboutme-left" md={7}>
            <p className="aboutme-text aboutme-title">
              Know who <span className="purple">I'M</span>
            </p>
            <p className="aboutme-text">
              Hi Everyone, I am <span className="purple">Ali Beygholeh</span>{" "}
              from <span className="purple">Tehran, Iran</span>.
            </p>
            <p className="aboutme-text">
            I like to learn new things
            </p>
            <p className="aboutme-text">
            I got an associate degree in electronics from the Islamic Revolution University
            </p>
            <span className="aboutme-fave">
              Apart from coding, some other activities that I love to do!
            </span>
            <ul className="aboutme-fave__list">
              <li>
                <FaRegHandPointRight />
                Playing Games
              </li>
              <li>
                <FaRegHandPointRight />
                Hala Madrid
              </li>
              <li>
                <FaRegHandPointRight />
                Movie
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <img
              src={img1}
              alt="ali beygholeh"
              className="img-fluid text-right"
            />
          </Col>
        </Row>
        <div className="aboutme-prof">
          <h2 className="aboutme-prof-title">
            Profetional <span className="purple">Skillset</span>
          </h2>
          <Row className="d-flex justify-content-center gy-4 mt-5">
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <FaHtml5 size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <FaCss3Alt size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <FaBootstrap size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <RiTailwindCssFill size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <IoLogoJavascript size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <FaReact size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <FaGitAlt size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <FaSass size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <FaWordpress size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <TbSeo size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <SiAdobephotoshop size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <FaFigma size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <SiAdobexd size={"80px"} />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <div className="prof-skill">
                <SiAdobepremierepro size={"80px"} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
