// frontend/src/components/Login.js

// React: Core library for building user interfaces.
// useState: Hook to manage local state (e.g., email, password, error).
// useContext: Hook to access the authentication context (AuthContext).
// axios: Library for making HTTP requests to the backend.
// Link, useNavigate: React Router components for navigation.
// Bootstrap components: Container, Form, Button, etc., used for layout and styling.

import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// Define the base URL for the backend API
const REACT_APP_API_BASE_URL='http://localhost:5001'

const Login = () => {
  // Define the state variables and their setter functions:

  // email, password: State variables to store user input.
  // error: State variable to store and display error messages.
  // login: Function from AuthContext to store the authentication token.
  // navigate: Function to programmatically navigate to different routes.

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Define the handleSubmit function to handle form submission:
  // Prevents the default form submission behavior.
  // Sends the login request to the backend API with the entered email and password.
  // On successful login, stores the token (Local storage) and navigates to the main page.
  // On failure, displays an error message.

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await axios.post(`${REACT_APP_API_BASE_URL}/api/auth/login`, { email, password });
      login(res.data.token);
      navigate('/main');
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  // Define the login form using Bootstrap components:
  
  // Renders a form for the user to input their email and password.
  // Displays an error message if login fails.
  // Includes a link to the registration page if the user doesn't have an account.

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Login
            </Button>
          </Form>
          <div className="mt-3">
            <Link to="/register">Don't have an account? Register here</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
