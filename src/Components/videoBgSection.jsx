import React, { useEffect } from "react";
import CountUp from "react-countup";
import bgVideo from "../Images/aboutBanner.png";
import "./css/videoBg.css";
import SocialMediaIcons from "./socialIcons";

function VideoBgSection() {
  const caseStudy = 21;
  const projects = 8;
  const rnd = 35;

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center text-center videoBg-div">
        {/* <video autoPlay muted loop className="ms-auto bg-dark">
          <source src={bgVideo} type="video/mp4" /> */}
        <img src={bgVideo} alt="" />
        {/* </video> */}
        <div className="text-on-video text-white">
          <h1 className="my-3">About Us</h1>
          <h2 className="">
            Welcome to{" "}
            <span style={{ color: "#24ade3" }}>
              OxYmora Technology Pvt. Ltd.
            </span>
          </h2>
          <div className="d-sm-flex justify-content-between my-5 contaier">
            <div className="text-center mx-5">
              <SocialMediaIcons sMedia="briefcase-fill fs-2" />
              <p className="my-3 fs-2">
                <CountUp end={caseStudy} duration={3} />
              </p>
              <p>
                <small>CASE STUDIES</small>
              </p>
            </div>
            <div className="text-center mx-5">
              <SocialMediaIcons sMedia="stack fs-2" />
              <p className="my-3 fs-2">
                <CountUp end={projects} duration={3} />
              </p>
              <p>
                <small>PROJECTS</small>
              </p>
            </div>
            <div className="text-center mx-5">
              <SocialMediaIcons sMedia="gear-fill fs-2" />
              <p className="my-3 fs-2">
                <CountUp end={rnd} duration={3} />
              </p>
              <small>
                <p className="m-0">RESEARCH AND PRODUCT </p>DEVELOPMENT
              </small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoBgSection;
