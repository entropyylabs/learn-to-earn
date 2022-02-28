import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-banner">
        <div className="banner-left">
          <div className="banner-msg">
            <p>Learn</p> <p>to</p>{" "}
            <p>
              earn <strong>rewards</strong>
            </p>
            <Button className="get-started-btn l2e-btn" type="primary">
              <Link to="/home">Get started</Link>
            </Button>
          </div>
        </div>
        <div className="banner-right">
          <img src={banner} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
