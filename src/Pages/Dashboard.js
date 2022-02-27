import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "antd";

function Dashboard() {
  return (
    <div className="page">
      <Container>Welcome</Container>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default Dashboard;
