/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Container, Row, Col } from "../Grid";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/home'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <>

                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleChange}
                            name="username"
                            placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password" 
                            placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" onClick={this.handleSubmit}
                        className="btn btn-primary">Submit</button>

                </>
            )
        }
    }
}

export default Login
