import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavigationBar.css";

export default function NavigationBar(props) {

  let amountOfItems = props.cartItems.length;

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="./favicon.ico"
              className="d-inline-block align-top navigation-bar--logo"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <Link className="nav-item nav-link" to="/admin">Admin</Link>
            <Link className="nav-item nav-link" to="/cart">
              Cart ({amountOfItems})
            </Link>
          </Nav>
          <span className="navbar-text">
            User: {props.username}
          </span>
        </Container>
      </Navbar>
    </div>
  )
}
