import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

function CreateCourse() {
  return (
    <div className="page">
      <h1 className="page-title">Create Course</h1>
      <Collapse accordion>
        <Panel header="Course Details" key="1">
          <p>Add course info</p>
        </Panel>
        <Panel header="Course Content" key="2">
          <p>Add Modules</p>
        </Panel>
        <Panel header="Course Rewards" key="3">
          <p>Add NFT</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default CreateCourse;
