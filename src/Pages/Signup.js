import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navigator from "../Components/Navbar";
import { useUserAuth } from "../context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Container className="form-holder">
        <Row style={{ width: "400px", backgroundColor: "white" }}>
          <Col>
            <div className="p-4 m-4 border">
              <h2 className="mb-3">Sign up!</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-3">
                  <Button variant="primary" type="submit">
                    Sign up!
                  </Button>
                </div>
              </Form>
            </div>

            <div className="p-4 border m-4  text-center">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
