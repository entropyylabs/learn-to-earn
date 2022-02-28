import React, { useRef, useEffect, useState } from "react";
import CertificateImage from "../assets/Certificate.png";
import useScreenshot from "../hooks/useScreenshot";

function Certificate() {
  const { generateImage, captureRef } = useScreenshot();
  const [name, SetName] = useState("Your name");

  return (
    <div>
      <div className="certificate-holder">
        <div className="claim-row">
          <input
            type="text"
            placeholder="Enter name for certificate"
            onChange={(e) => {
              SetName(e.target.value);
            }}
          />
          <button className="claim-btn" onClick={generateImage}>
            Claim your reward
          </button>
        </div>
        <div ref={captureRef} className="certificate-div">
          <img src={CertificateImage} alt="" srcset="" />
          <div className="certificate-name">{name}</div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
