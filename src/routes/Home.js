import React from "react";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";

import "./Home.css";
import "../components/Nav.css";
import "../components/link.css";

function Home() {
  return (
    <div className="body">
      <Link to="/">
        <img id="logo" src="/img/name_logo_no_bg.png" alt="logo" />
      </Link>
      <div id="intro">
        <span>This is Joey</span>
      </div>

      <Nav />

      <div className="circular_img">
        <img
          className="profile__image"
          src="/img/sample_profile_picture.jpeg"
          alt="Profile"
          title="Profile"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default Home;
