import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/NavBar"
import Timer from "./Pages/Timer";
import intro from "./Pages/intro";
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
    
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this) 
  }
  componentDidMount() { 
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  } 

    render() {
      return (
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={intro} />
              <Route exact path="/*" component={Timer} />


            </Switch>
          </div>
        </Router>
      );
    }
  }

  export default App;
