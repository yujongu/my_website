import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Bio from "./routes/Bio";
import "./App.css";

global.fetch = fetch;

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/biography" component={Bio} />
      </HashRouter>
    );
  }
}

export default App;
