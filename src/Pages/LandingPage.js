import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function LandingPage() {
  return (
    <div className="landing-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="banner-holder">
              <h1 className="landing-banner">Learn to earn!</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
