import React, { useContext, useState } from "react";
import axios from "axios";
import { Container, Card, Form, Button, Row } from "react-bootstrap";
import "./Login.css";

import { UserContext } from "../Context/UserContext";

export default function Login() {

  const { user, saveUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleChange(event) {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  function handleLogin() {
    axios.post(`http://localhost:8080/api/user/login`, formData)
      .then(response => {
        if (response.data.success) {
          return saveUser({
            "username": response.data.response.username,
            "password": response.data.response.password
          });
        } else {
          return alert(response.data.error);
        }
      })
      .catch(error => alert(error));
  }

  function handleSignup() {
    axios.post("http://localhost:8080/api/user/signup", formData)
      .then(response => {
        if (response.data.success) {
          return saveUser({
            "username": response.data.response.username,
            "password": response.data.response.password
          });
        } else {
          return alert(response.data.error);
        }
      })
      .catch(error => alert(error));
  }

  function handleLogout() {
    saveUser({
      "username": "Anonymous",
      "password": ""
    });
  }

  return (
    <Container>
      <Row className="row justify-content-center">
        <Card className="col login--card">
          <h4>Current user: {user.username}</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Enter your username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter your password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="success"
              onClick={handleLogin}
            >
              Log in
            </Button>
            <Button
              variant="primary"
              onClick={handleSignup}
            >
              Sign up
            </Button>
            <Button
              variant="danger"
              onClick={handleLogout}
            >
              Log out
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  )
}