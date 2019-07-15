import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/NavBar"
import Timer from "./Pages/Timer";
import intro from "./Pages/intro";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={intro} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/*" component={Timer}/>
           
        
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
