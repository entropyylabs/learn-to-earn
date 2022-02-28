import React, { useState } from "react";
import { Layout, Steps, Button } from "antd";
import ContentCard from "../Components/ContentCard";
import courses from "../services/seeder";
import { Link } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

const { Step } = Steps;

function Course() {
  const [step, setStep] = useState(0);
  const course = courses[0];
  const course_name = courses[0].name;
  const modules = course.modules;
  return (
    <Layout>
      <Sider theme="light">
        <h4>Modules</h4>
        <Steps direction="vertical" current={step}>
          {modules.map(({ module_name }, index) => {
            return (
              <Step title={module_name} description={`Module ${index + 1}`} />
            );
          })}
        </Steps>
      </Sider>
      <Layout>
        <Header style={{ background: "#F0F2F5" }}>
          <h1>{course_name}</h1>
        </Header>
        <Content>
          <ContentCard content={modules[step].content} />
        </Content>
        <Footer>
          <div className="module-footer">
            <Button
              className="l2e-btn"
              onClick={() => {
                step < modules.length - 1 ? setStep(step + 1) : setStep(step);
              }}
            >
              Next &nbsp; <i class="fa-solid fa-arrow-right"></i>
            </Button>
            {step == modules.length - 1 && (
              <Button className="l2e-btn">
                <Link to="/certificate">Claim reward</Link>
              </Button>
            )}
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Course;
