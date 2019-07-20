import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Components/Login"
import SignupForm from "./Components/SignupForm"
import Navbar from "./Components/NavBar"
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

  updateUser(userObject) {
    this.setState(userObject)
  }

  _logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
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
          <Navbar
          name={this.state.username}
          />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={intro} />
            <Route exact path="/sign-up"component={SignupForm}/>
            <Route path="/login" render={() => 
                <Login
              updateUser={this.updateUser}
             />}/>
            <Route path="/signup" render={() => 
              <SignupForm
                signup={this.signup}
             />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
