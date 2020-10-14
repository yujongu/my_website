import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Unsplash, { toJson } from "unsplash-js";

import Home from "./routes/Home";
import "./App.css";

global.fetch = fetch;
const accKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const secKey = process.env.REACT_APP_UNSPLASH_SECRET_KEY;

const unsplash = new Unsplash({
  accessKey: accKey,
  secret: secKey,
});

class App extends React.Component {
  fetchImage = () => {
    unsplash.photos
      .getRandomPhoto({
        orientation: "landscape",
      })
      .then(toJson)
      .then((json) => {
        console.log(json.urls);
        var main = document.getElementById("main");
        main.style.backgroundImage = `url(${json.urls.full})`;
        main.style.backgroundSize = "100%, auto";
      });
  };

  componentDidMount() {
    this.fetchImage();
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />c
      </HashRouter>
    );
  }
}

export default App;
