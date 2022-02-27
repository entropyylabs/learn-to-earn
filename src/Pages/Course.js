import React, { useState } from "react";
import { Layout } from "antd";
import { Steps } from "antd";
import ContentCard from "../Components/ContentCard";
const { Header, Footer, Sider, Content } = Layout;

const { Step } = Steps;

function Course() {
  const [step, setStep] = useState(0);
  return (
    <Layout>
      <Sider theme="light">
        <h4>Modules</h4>
        <Steps direction="vertical" current={step}>
          <Step title="Introduction to DeFi" description="Module 1" />
          <Step title="Introduction to DeFi" description="Module 1" />
          <Step title="Introduction to DeFi" description="Module 1" />
          <Step title="Introduction to DeFi" description="Module 1" />
          <Step title="Introduction to DeFi" description="Module 1" />
          <Step title="Introduction to DeFi" description="Module 1" />
          <Step title="Introduction to DeFi" description="Module 1" />
        </Steps>
      </Sider>
      <Layout>
        <Header style={{ background: "#F0F2F5" }}>
          <h1>Course</h1>
        </Header>
        <Content>
          <ContentCard />
        </Content>
        <Footer>
          <button onClick={() => setStep(step + 1)}>Next</button>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Course;
