import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./App.css";

global.fetch = fetch;

class App extends React.Component {
  setBackgroundImage = () => {
    var a = Math.floor(Math.random() * 5);
    var body = document.getElementById("main");
    body.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),url(/img/background_img/${a + 1}.jpg)`;
    body.style.backgroundSize = "100%, 100%";
  };
  componentDidMount() {
    this.setBackgroundImage();
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
      </HashRouter>
    );
  }
}

export default App;
