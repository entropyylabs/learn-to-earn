import React from "react";
import { Collapse } from "antd";
import AddCourse from "../Components/AddCourse";
import AddModules from "../Components/AddModules";
import AddReward from "../Components/AddReward";
const { Panel } = Collapse;

function CreateCourse() {
  return (
    <div className="page">
      <h1 className="page-title">Create Course</h1>
      <Collapse accordion>
        <Panel header="Course Details" key="1">
          <AddCourse />
        </Panel>
        <Panel header="Course Content" key="2">
          <AddModules />
        </Panel>
        <Panel header="Course Rewards" key="3">
          <AddReward />
        </Panel>
      </Collapse>
    </div>
  );
}

export default CreateCourse;
