/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Link } from 'react-router-dom'

function NavBar(props) {
  if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props.logout}>
							Logout
						</Link>
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