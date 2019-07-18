import React from "react";
import axios from 'axios';
import SignupForm from "../Components/SignupForm"
import Login from "../Components/Login"
import { Col, Row, Container } from "../Components/Grid";
import Form from "../Components/Form";
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


class intro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            players: 0,
            username:"",
            password:""
        }
    }  
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = (event) => {
        console.log(this.state.username, this.state.password)
        event.preventDefault();
        axios.post("/", {
            username:this.state.username,
            password:this.state.password
        }).then( res => { console.log(res)
            if(Response.data) {
                console.log("success")
            }
            else {
                console.log("error")
            }
            }).catch(error => console.log(error))
        }

    handleClick = (players) => {
        this.setState({
            players: players
        })
    }



    render() {
        return (
            <>
            {/* <form action="/login" method="post">
            <div>
                <label>Username:</label>
                <input type="text"  onChange={this.handleInputChange} value={this.state.username} name="username"/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={this.handleInputChange}  value={this.state.password} name="password"/>
            </div>
            <div>
                <input type="submit" onClick = {this.handleFormSubmit} value="Log In"/>
            </div>
        </form> */}
        {/* <SignupForm /> */}
        <Login />
        </>
        )
        }
    }

export default intro;