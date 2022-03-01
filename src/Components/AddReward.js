import React, { useState } from "react";
import { Button, Upload, Modal } from "antd";
import ImgCrop from "antd-img-crop";
import success from "../assets/success.png";

function AddReward() {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://i.postimg.cc/Gm23GvC3/Certificate.png",
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

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
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </ImgCrop>
      <Button type="primary" onClick={showModal}>
        Preview Certificate
      </Button>
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

export default AddReward;
