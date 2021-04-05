import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Accordian from "../Components/accordians";
import CardText from "../Components/cardWithText";
import img1 from "../Images/indAuto.png";
import img2 from "../Images/cloud.png";
import img3 from "../Images/pcb.png";
import img4 from "../Images/pcbManufacturing.jpg";
import "./services.css";
import { Link } from "react-router-dom";

// import service1Img from "../Images/service pae iot without background.png";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div id="service-main-div">
        <div className="d-md-flex container-md pt-5">
          <div className="">
            <h2>We deal in a Stack of Technologies and Industries....</h2>
          </div>
          <div className="mx-md-5 d-md-flex" style={{ width: "100%" }}>
            <div className="d-md-flex-column" style={{ width: "100%" }}>
              <Accordian count="01" heading="Internet Of Things(IOT)" />
              <Accordian
                count="02"
                heading="Robotics Process Automation(RPA)"
              />
              <Accordian count="03" heading="Embedded Systems" />
              <Accordian count="04" heading="Mobile/Web Development" />
            </div>
            <div className="d-md-flex-column" style={{ width: "100%" }}>
              <Accordian count="05" heading="Consumer Electronics" />
              <Accordian count="06" heading="Agriculture" />
              <Accordian count="07" heading="Medical" />
              <Accordian count="08" heading="Automation" />
            </div>
          </div>
        </div>
        <div className="container-md">
          <div className="d-md-flex  mt-3" style={{ width: "100%" }}>
            <div className="card-divs">
              <CardText
                heading={
                  <Link
                    to="/OurServices/Ideation"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Research & Product Development
                  </Link>
                }
                text={
                  <Link
                    to="/OurServices/Ideation"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    We bring low code, low cost, simplified way to understand,
                    multiple testing and two times faster speed to our clients.
                  </Link>
                }
                imgUrl={img3}
                imgHeight="40vh"
                textDivH="40vh"
              />
            </div>
            <div className="card-divs">
              <CardText
                heading={
                  <Link
                    to="/OurServices/IdustryVisit"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Industrial Panel
                  </Link>
                }
                text={
                  <Link
                    to="/OurServices/IdustryVisit"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Observation brings a difference. We hear and read many
                    manufacturing details based on different sources with
                    virtual knowledge. We need to know practical machinery of
                    this theoretical facts. Every industry has different ways
                    and systems to deal with product manufacturing so it is very
                    important to visit Industry. Industry visit gives an
                    overview of mechanism used in respective field. Share your
                    ideas with us, we are here to work on it.
                  </Link>
                }
                imgUrl={img1}
                textDivH="40vh"
                imgHeight="40vh"
              />
            </div>
          </div>
          <div className="d-md-flex justify-content-center">
            <div className="card-divs">
              <CardText
                heading={
                  <Link
                    to="/OurServices/PCBdesign"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    PCB Designing and Manufacturing
                  </Link>
                }
                text={
                  <Link
                    to="/OurServices/PCBdesign"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Have you heard about the word PCB? Do you know how it is
                    designed in manufacturing world? How do industries design it
                    in a bulk quantity with higher quality and accuracy? First
                    of all, we need to know about the designing techniques and
                    practices. We are here to give you information about PCB
                    designing. There are few steps that are needed to be
                    followed carefully.
                  </Link>
                }
                imgUrl={img4}
                textDivH="40vh"
                imgHeight="40vh"
              />
            </div>
            <div className="card-divs pb-5 pb-0">
              <CardText
                heading={
                  <Link
                    to="/OurServices/IOT"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    IOT Product Development
                  </Link>
                }
                text={
                  <Link
                    to="/OurServices/IOT"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    We bring low code, low cost, simplified way to understand,
                    multiple testing and two times faster speed to our clients
                  </Link>
                }
                imgUrl={img2}
                imgHeight="40vh"
                textDivH="40vh"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Services;
