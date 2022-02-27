import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import authImage from "../assets/authImage.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleLogIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await googleLogIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Container className="form-holder" style={{ display: "block" }}>
        <Row style={{ width: "105%", height: "100%" }}>
          <Col>
            <div
              className="auth-image"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#D989FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={authImage} alt="" srcset="" />
            </div>
          </Col>

          <Col
            style={{
              margin: "auto",
              alignItems: "center",
              width: "400px",
            }}
          >
            <div>
              <div className="p-4 m-4 border">
                <h2 className="mb-3">Login!</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
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
                      Login!
                    </Button>
                  </div>
                </Form>
                <hr />

                <div className="mt-3">
                  <GoogleButton onClick={handleGoogleLogin} className="g-btn" />
                </div>
              </div>
              <div className="p-4 border mt-3 m-4 text-center">
                Don't have an account? <Link to="/signup">Sign up!</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
