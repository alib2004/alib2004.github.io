import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row xs={1} md={3}>
          <Col>
            <p className="text-md-start text-sm-center">Designed and Developed by Ali beygholeh</p>
          </Col>
          <Col>
            <span>Copyright © 2025 AB</span>
          </Col>
          <Col>
            <div className="footer-icons justify-content-xs-center">
              <FaInstagram size={'20px'}/>
              <FaTelegramPlane size={'20px'}/>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
