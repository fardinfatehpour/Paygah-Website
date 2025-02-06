import React, { useState } from "react";
//css
import "../css/Heder.css";
//component
import PersianClock from "./PersianClock.jsx";
//bootstarp
import { Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//mui
import TextField from "@mui/material/TextField";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
//Picture
import Emam from "../Picture/Emam.png";
function Heder() {
  const [activeLink, setActiveLink] = useState("home"); // Default active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  //Dark-Light
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      {/* Header */}
      <Row>
        <div id="clock">
          <PersianClock />
        </div>
        <h1 id="title">قرارگاه فرهنگی سردار شهید محمدعلی حقبین</h1>
        <img src={Emam} alt="Emam" id="Emam-jpg" />
      </Row>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        id="navb"
      >
        {/* Navbar */}
        <Container>
          <Navbar.Brand href="#">
            {isDarkMode ? (
              <Button
                variant="outline-dar"
                id="Dark-Light"
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
              >
                <LightModeOutlinedIcon />
              </Button>
            ) : (
              <Button
                variant="outline-dar"
                id="Dark-Light"
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
              >
                <DarkModeOutlinedIcon />
              </Button>
            )}
            <TextField id="search" label="Search" variant="outlined" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className={`nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                ارتباط با ما
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "Biography" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("Biography")}
              >
                زندگی نامه
              </Nav.Link>

              <Nav.Link
                className={`nav-link ${
                  activeLink === "family" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("family")}
              >
                خانواده
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === "media" ? "active" : ""}`}
                onClick={() => handleLinkClick("media")}
              >
                رسانه
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "schools" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("schools")}
              >
                مدارس هدف
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === "heiat" ? "active" : ""}`}
                onClick={() => handleLinkClick("heiat")}
              >
                هیئت
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === "base" ? "active" : ""}`}
                onClick={() => handleLinkClick("base")}
              >
                پایگاه
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "mosque" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("mosque")}
              >
                مسجد
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === "login" ? "active" : ""}`}
                onClick={() => handleLinkClick("login")}
              >
                ورود|ثبت نام
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "articles" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("articles")}
              >
                مقالات
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => handleLinkClick("home")}
              >
                خانه
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Heder;
