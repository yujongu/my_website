import React from "react";
import { Link } from "react-router-dom";

import { useHorizontalScroll } from "../components/useSideScroll";

import "./Bio.css";

function Bio() {
  const scrollRef = useHorizontalScroll();

  return (
    <div>
      <Link to="/">
        <img id="logo" src="/img/name_logo_no_bg.png" alt="logo" />
      </Link>
      <div id="container" ref={scrollRef}>
        <div>
          <img src="/img/background_img/seoul-skyline.jpg" alt="Seoul" />
        </div>
        <div>
          <img src="/img/background_img/winnipeg.jpg" alt="Winnipeg" />
        </div>
        <div>
          <img src="/img/background_img/deer.jpg" alt="North Carolina deer" />
        </div>
        <div>
          <img src="/img/background_img/massachusetts-winter.jpg" alt="Anguk" />
        </div>
        <div>
          <img src="/img/background_img/purdue-field.jpg" alt="Purdue" />
        </div>
        <div>
          <img src="/img/background_img/anguk-street.jpg" alt="Anguk" />
        </div>
      </div>
    </div>
  );
}

export default Bio;
