import React, { useState } from "react";
import { Form, Input, Button, InputNumber, Modal } from "antd";
import success from "../assets/success.png";

function AddCourse() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please add a Name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please add a Description!" }]}
        >
          <Input.TextArea showCount maxLength={250} />
        </Form.Item>

        <Form.Item label="No. of modules">
          <Form.Item name="modules-number" noStyle>
            <InputNumber min={1} max={10} />
          </Form.Item>
        </Form.Item>

        <Form.Item label="No. of quizes">
          <Form.Item name="quizes-number" noStyle>
            <InputNumber min={1} max={10} />
          </Form.Item>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={showModal}>
            Add course
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="Details Submitted"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img className="modal-image" src={success} alt="" srcset="" />
        <p>Details submitted successfully!</p>
        <p> Course will be added subject to approval</p>
      </Modal>
    </div>
  );
}

export default AddCourse;
