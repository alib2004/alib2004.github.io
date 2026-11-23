import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../../assets/images/img1.png";
import avatar from "../../assets/images/avatar.svg";
import { MdWavingHand } from "react-icons/md";
import TypeIt from "typeit-react";
import { FaGithub,FaInstagram,FaTelegram } from "react-icons/fa";
import "./Home.css";
const Home = () => {
  return (
    <div className="me">
      <Container>
        <Row xs={1} md={2} className="row-me">
          <Col className="col-me__left">
            <div className="col-me__text-icon d-flex align-items-center gx-3">
              <span className="me-header">Hi There</span>
              <MdWavingHand size={"45px"} className="col-me__icon" />
            </div>
            <span className="me-name">
              I'M <span className="me-name__ali">Ali Beygholeh</span>
            </span>
            <TypeIt
              className="typewritter"
              getBeforeInit={(instance) => {
                instance
                  .type("FrontEnd Developer")
                  .pause(750)
                  .delete()
                  .pause(750)
                  .type("Wordpress")
                  .pause(750)
                return instance;
              }}
              options={{
                loop: true,
              }}
            />
          </Col>
          <Col>
            <img src={image1} alt="" width={'400px'}/>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col className="col-about__left" md={8}>
          <span className="col-about__left-text col-about__left-header">LET ME <span className="purple">INTRODUCE</span> MYSELF</span>
          <span className="col-about__left-text">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</span>
          <span className="col-about__left-text">I am fluent in <span className="purple">Javascript</span>.</span>
          <span className="col-about__left-text">My field of Interest's are building new  <span className="purple">Web pages and Products</span>.</span>
          <span className="col-about__left-text">Whenever possible, I also apply my passion for developing websites with Modern Javascript Library and Frameworks  like <span className="purple">React.js</span></span>
            
          </Col>
          <Col  md={4}>
            <img src={avatar} alt="" width={'200px'}/>
          </Col>
        </Row>
        <div className="contact-us-home">
          <span className="contact-us-home__header">FIND ME ON</span>
          <span>Feel free to <span className="purple">connect</span> with me</span>
          <div className="contact-us__icons">
            <a href="https://github.com/alib2004" className="contact-us__icon-link">
              <FaGithub className="contact-us__icon"/>
            </a>
            <a href="https://instagram.com/ialiwb" className="contact-us__icon-link">
              <FaInstagram className="contact-us__icon"/>
            </a>
            <a href="https://telegram.me/alib2004" className="contact-us__icon-link">
              <FaTelegram className="contact-us__icon"/>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
