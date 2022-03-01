import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

function CourseCard({ color, icon, name, description }) {
  return (
    <div className="course-card" style={{ backgroundColor: `${color}` }}>
      <Row>
        <Col span={16}>
          <span className="course-modules">5 modules</span>
          <span className="course-quiz">1 quiz</span>
          <h4 className="course-name">{name}</h4>
          <p className="course-description">{description}</p>
          <Button className="course-btn l2e-btn" type="primary">
            <Link to="/course">Start Learning!</Link>
          </Button>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <img src={icon} alt="" srcset="" />
        </Col>
      </Row>
    </div>
  );
}

export default CourseCard;
