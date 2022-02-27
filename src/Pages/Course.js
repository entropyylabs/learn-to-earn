import React, { useState } from "react";
import { Layout } from "antd";
import { Steps } from "antd";
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis enim doloribus omnis facilis sunt corporis aliquid
            voluptatem. Distinctio rerum delectus maxime blanditiis ipsa quidem
            reprehenderit tenetur corporis? Ab alias officia fugit nobis enim
            placeat, vitae officiis nisi veritatis eos id doloremque!
            Perferendis atque, nam commodi dolore harum eius officiis, obcaecati
            optio quis iusto neque tempore, ipsum tempora quisquam quas dicta
            deserunt et velit culpa quo perspiciatis? Temporibus magni nisi,
            laborum inventore perferendis odit quos provident numquam aspernatur
            non error similique dolorum est, voluptates tempora quibusdam, quae
            modi sed id? Deleniti magnam dolores iusto illum ratione optio
            commodi laborum ducimus atque.
          </p>
          <p>
            Excepturi explicabo corporis libero debitis, ab velit? Nihil qui
            tempore sed odio, possimus dolorum expedita. Dolores exercitationem
            dolore nulla error dolorum impedit tenetur, officia explicabo
            quibusdam fugit quo voluptates reprehenderit, assumenda reiciendis
            eum ut earum! Corporis laudantium repellendus nostrum at quibusdam
            fuga expedita. Tempore, recusandae veniam! Enim debitis ut
            voluptatem nam dignissimos nemo amet itaque error eius sint earum
            officia, vitae obcaecati! Laudantium placeat qui dolorem rem.
            Dolores illum nisi enim nulla ipsa, sed quaerat earum laudantium
            facilis similique ad sit ratione cum, illo necessitatibus,
            repudiandae eaque dolor! Deserunt provident unde dolor voluptatem
            minima? Dolorem, reiciendis? Recusandae dignissimos eos
            exercitationem?
          </p>
          <p>
            Eum quis, error eveniet quidem doloremque cumque? Dolor porro magnam
            amet harum esse. Esse deleniti consequatur quaerat cupiditate!
            Commodi, enim! Nihil iusto blanditiis cumque iste omnis. Mollitia
            quis, officiis magni odit repellat qui ex sint laborum, pariatur
            assumenda hic accusamus, voluptatum culpa quae molestiae rerum modi
            dolore illo reprehenderit accusantium vel enim cumque praesentium?
            Consectetur eius tempora odit sed, assumenda, quam recusandae
            repellendus maiores placeat ab odio nulla hic ad iusto esse, ratione
            porro aspernatur. Obcaecati ea illo at unde libero nostrum pariatur
            quae cupiditate culpa debitis similique est molestias quam nam,
            inventore ad rerum officia? Porro at facilis a?
          </p>
        </Content>
        <Footer>
          <button onClick={() => setStep(step + 1)}>Next</button>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Course;
