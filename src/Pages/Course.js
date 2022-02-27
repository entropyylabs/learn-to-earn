import React from "react";
import { Layout } from "antd";
import { Steps } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const { Step } = Steps;

function Course() {
  return (
    <Layout>
      <Sider theme="light">
        <h4>Modules</h4>
        <Steps direction="vertical" current={3}>
          <Step title="Introduction" description=" a" />
          <Step title="Module 1" description=" a" />
          <Step title="Module 2" description=" a" />
          <Step title="Module 1" description=" a" />
          <Step title="Module 2" description=" a" />
          <Step title="Module 1" description=" a" />
          <Step title="Module 2" description=" a" />
        </Steps>
      </Sider>
      <Layout>
        <Header style={{ background: "#F0F2F5" }}>
          <h1>Course</h1>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Course;
