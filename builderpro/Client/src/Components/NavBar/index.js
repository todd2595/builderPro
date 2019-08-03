/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Link } from 'react-router-dom'

function NavBar(props) {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav justify-content-center">
					<li className="nav-item">
						<Link to="/home" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						{/* <button className="nav-link" onClick={() => props.logout()}>
							Logout
						</button> */}
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							Change User</a>
					</li>
					<li className="nav-item">
						<a href="/" className="nav-link">Hello {props.name}</a>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand" href="/home">
					Home
    </a>
				<a className="navbar-brand" href="/">
					Change User
    </a>
				<span>Hello {props.name}!</span>
			</nav>


		)
	}
}

export default NavBar;