import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
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
  );
}
export default Nav;
