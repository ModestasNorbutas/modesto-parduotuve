import React from "react";
import { Container, Card, Form, Button, Row } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {

  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  });

  function handleChange(event) {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <Container>
      <Row className="row justify-content-center">
        <Card className="col login--card">
          <h4>Current user: {props.username}</h4>
          <Form onSubmit={(event) => props.handleLogin(event, formData)}>
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
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  )
}