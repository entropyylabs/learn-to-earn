import React, { useState } from "react";
import { Form, Input, Button, Space, Modal } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import AddContent from "../Components/AddContent";
import success from "../assets/success.png";

function AddModules() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
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
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.List name="modules">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "name"]}
                    rules={[{ required: true, message: "Missing module name" }]}
                  >
                    <Input placeholder="Module Name" />
                  </Form.Item>
                  <AddContent />
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add Module
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" onClick={showModal}>
            Create Modules
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

export default AddModules;
