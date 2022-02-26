import React from "react";
import { Row, Col, Button } from "antd";

function CourseCard() {
  return (
    <div className="course-card">
      <Row>
        <Col span={16}>
          <span className="course-modules">5 modules</span>
          <span className="course-quiz">1 quiz</span>
          <h4 className="course-name">Name</h4>
          <p className="course-description">
            {/* {item.description.length > 250
              ? `${item.description.substring(0, 250)}...`
              : item.description} */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            similique pariatur quaerat minima tempora doloremque.
          </p>
          <Button className="course-btn" type="primary">
            Start Learning!
          </Button>
        </Col>
        <Col span={8}>
          <img
            src="https://img-b.udemycdn.com/course/240x135/1219332_bdd7.jpg?secure=9rnhd-BQnghetFzvDbRoAw%3D%3D%2C1645991149"
            alt=""
            srcset=""
          />
        </Col>
      </Row>
    </div>
  );
}

export default CourseCard;
