import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="body">
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
