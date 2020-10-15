import React from "react";
import "./Home.css";
import "../components/nav.css";
function Home() {
  return (
    <div className="body">
      <div id="intro">
        <span>This is Joey</span>
      </div>
      <div className="nav__container">
        <div className="nav__container-left">
          <div className="nav__left-top">
            <span>Bio</span>
          </div>
          <div className="nav__left">
            <span>Work Experiences</span>
          </div>
          <div className="nav__left-bottom">
            <span>Skills</span>
          </div>
        </div>
        <div className="nav__container-right">
          <div className="nav__right-top">
            <span>Projects</span>
          </div>
          <div className="nav__right">
            <span>Related courses</span>
          </div>
          <div className="nav__right-bottom">
            <span>Interests</span>
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
