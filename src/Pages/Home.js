import React from "react";
import { Button } from "antd";
import CourseCard from "../Components/CourseCard";
import { Row, Col, Slider } from "antd";

function Home() {
  return (
    <div className="page">
      <h6 className="page-title">Explore Courses</h6>

      <Row>
        <Col span={12}>
          <CourseCard />
        </Col>

        <Col span={12}>
          <CourseCard />
        </Col>

        <Col span={12}>
          <CourseCard />
        </Col>

        <Col span={12}>
          <CourseCard />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
