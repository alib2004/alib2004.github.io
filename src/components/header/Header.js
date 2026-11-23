import React from "react";
import logo from "../../assets/images/logo.png";
import { TiHome } from "react-icons/ti";
import { FaRegUser, FaGithub } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaNewspaper } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand className="d-flex">
          <Link to='/'>
          <img src={logo} className="logo-img" alt="" />
          </Link>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" color="white"/>
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav "
        >
          <Nav className="ul">
            <Link to="/">
              <TiHome />
               Home
            </Link>
            <Link to="/about">
              <FaRegUser />
              About
            </Link>
            <Link to="/Projects">
              <AiOutlineFundProjectionScreen />
               Projects
            </Link>
            <Link to="/Resume">
              <FaNewspaper />
              Resume
            </Link>
            <Link to="https://github.com/alib2004">
              <FaGithub />
              Github
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
