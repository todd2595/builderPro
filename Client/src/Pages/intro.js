import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
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
            username: "",
            password: ""
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
        axios.post("/user/login", {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            console.log(res)
            if (Response.data) {
                console.log("success")
            }
            else {
                console.log("error")
            }
        }).catch(error => console.log(error))
    }

    handleClick = (players) => {
        // this.setState({ })
    }



    render() {
        return(
            <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Guess WHAT?</h1>
                    <p className="lead">Login or Sign-up!</p>
                </div>
            </div>
            <a href= "/login" className="btn btn-primary btn-lg btn-block"> <span className="text-secondary">Login</span></a>
            <a href= "/sign-up" className="btn btn-secondary btn-lg btn-block"> <span className="text-primary">Sign-up</span></a>
            </>
        )
    }
}

export default intro;