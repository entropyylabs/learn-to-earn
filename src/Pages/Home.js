import React from "react";
import { Button } from "antd";
import CourseCard from "../Components/CourseCard";
import { Row, Col, Slider } from "antd";
import { Link } from "react-router-dom";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";

function Home() {
  return (
    <div className="page">
      <Row>
        <Col span={24}>
          <div className="home-heading">
            <h6 className="page-title">Explore Courses</h6>
            <Button className="course-btn l2e-btn" type="primary">
              <Link to="/create">Create course</Link>
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <CourseCard
            icon={course1}
            color="#D989FF"
            name="Introduction to DeFi"
            description="Explore the world of decentralized finance"
          />
        </Col>

        <Col span={12}>
          <CourseCard
            icon={course2}
            color="#18B2F4"
            name="Intermediate DeFi"
            description="Learn about DEXs and lending markets"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
