import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import "../components/nav.css";
import "../components/link.css";

function Home() {
  return (
    <div className="body">
      <div id="intro">
        <span>This is Joey</span>
      </div>
      <div className="nav__container">
        <div className="nav__container-left">
          <div className="nav__left-top">
            <Link className="link" to="/biography">
              Bio
            </Link>
          </div>

          <div className="nav__left">
            <Link className="link" to="/">
              Work Experiences
            </Link>
          </div>

          <div className="nav__left-bottom">
            <Link className="link" to="/">
              Skills
            </Link>
          </div>
        </div>

        <div className="nav__container-right">
          <div className="nav__right-top">
            <Link className="link" to="/">
              Projects
            </Link>
          </div>

          <div className="nav__right">
            <Link className="link" to="/">
              Related courses
            </Link>
          </div>

          <div className="nav__right-bottom">
            <Link className="link" to="/">
              Interests
            </Link>
          </div>
        </div>
      </div>

      <div className="circular_img">
        <img
          className="profile__image"
          src="/img/profile_picture.jpeg"
          alt="Profile"
          title="Profile"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default Home;
