import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SectionWithImg from "../Components/sectionWithImage.jsx";
import SectionWithBgImg from "../Components/sectionBgImage.jsx";
import Carousel from "../Components/carousel.jsx";
import CImg1 from "../Images/carouselImg01.png";
import CImg2 from "../Images/carouselImg02.png";
import CImg3 from "../Images/carouselImg03.png";
import whoWeAreImg from "../Images/whoWeAre.png";
import services1 from "../Images/services01.png";
import services4 from "../Images/services02.png";
import services3 from "../Images/services03.png";
import services2 from "../Images/services04.png";
import ideaBgImg from "../Images/Idea.png";
import "./Home.css";
import msg1Img from "../Images/msg1.png";
import msg2Img from "../Images/msg2.png";
import msg3Img from "../Images/msg3.png";
import demoImg from "../Images/demo1.png";
import c1Img from "../Images/Untitled design (4).jpg";
import c2Img from "../Images/Untitled design (5).jpg";
import c3Img from "../Images/Untitled design (6).jpg";
import c4Img from "../Images/Untitled design (7).jpg";
import c5Img from "../Images/Untitled design (8).jpg";
import c6Img from "../Images/Untitled design (9).jpg";
import c7Img from "../Images/Untitled design (10).jpg";
import c8Img from "../Images/Untitled design (11).jpg";
import c9Img from "../Images/Untitled design (12).jpg";
import c10Img from "../Images/Untitled design (13).jpg";
import c11Img from "../Images/Untitled design (14).jpg";
import c12Img from "../Images/Untitled design (15).jpg";
import c13Img from "../Images/Untitled design (16).jpg";
import c14Img from "../Images/Untitled design (17).jpg";
import c15Img from "../Images/Untitled design (18).jpg";

class Home extends Component {
  state = {
    Projects: [],
  };

  P_images = [];

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get("https://api.oytechnology.com/Projects")
      .then((res) => {
        console.log(res.data);
        this.setState({
          Projects: res.data.slice(0, 3),
        });
      })
      .catch((err) => {
        <div>Something Went Wrong. Please Re-Try </div>;
        console.log(err);
      });
  }
  handleMouseUp = (event) => {
    console.log(event);
    event.target.nextSibling.nextSibling.classList.remove("d-none");
    event.target.nextSibling.classList.add("d-none");
  };
  handleMouseDown = (event) => {
    event.target.nextSibling.nextSibling.classList.add("d-none");
    event.target.nextSibling.classList.remove("d-none");
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>OxYmora Technology Pvt. Ltd.</title>
        </Helmet>
        <Carousel img1={CImg1} img2={CImg2} img3={CImg3} />
        <SectionWithBgImg
          className="WhoWeAre"
          imgUrl={whoWeAreImg}
          // heading="Who We Are?"
          text={
            <div className="d-flex align-items-center imgBgdiv">
              <div className="">
                <h2 className="my-5">Who We Are?</h2>
                <p className="halfpara">
                  OYT OXYMORA Technology Private Limited, headquartered in
                  Jaipur, Rajasthan, India, was founded in 2018 as a captive
                  unit to support research and product development activities.
                  We started with a focus on topics ranging from EMBEDDED
                  SYSTEM, IOT and PCB designing for all of the group’s business
                  units
                </p>
                <p className="halfpara">
                  Team of OYT search and guide engineering talent and form a
                  global footprint for its R&D. At OYT, we aim to partner
                  closely with suppliers in India for our dynamic activities in
                  the area of product development.
                </p>

                <div className="text-end">
                  <p>
                    <Link to="/aboutUs">
                      <button className="btn btn-primary">Know More</button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          }
        />
        <section className="pb-3">
          <SectionWithImg
            heading="Our Services"
            text={
              <div>
                <p>
                  OYT OXYMORA TECHNOLOGY PRIVATE LIMITED taps into India’s
                  engineering talent to develop innovative products both locally
                  and globally. Here at OYT, we focus on research and design
                  exteriors to embedded systems, IOT and PCB designing. We do
                  research and develop a host of mobile applications,
                  electronics applications and tools.
                </p>

                <div className="text-end">
                  <p>
                    <Link to="/ourServices">
                      <button className="btn btn-primary">
                        See Our Services
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            }
          />
          <div className="d-md-flex justify-content-around">
            <div
              className="mx-3 project-img shadow"
              style={{
                position: "relative",
              }}
            >
              <Link to="/OurServices/Ideation" className="text-center">
                <img
                  src={services1}
                  className="service-img rounded"
                  style={{ height: "100%" }}
                  onMouseOver={this.handleMouseUp}
                  onMouseOut={this.handleMouseDown}
                />
                <h3
                  className="textONimg text-white text-center mx-5 px-3"
                  style={{ position: "absolute", bottom: 50, zIndex: 0 }}
                >
                  R&D
                </h3>
                <p
                  className="d-none p-5 m-1 text-dark project-text"
                  style={{ position: "absolute", top: 30, zIndex: -20 }}
                >
                  <strong>
                    We bring low code, low cost, simplified way to understand,
                    multiple testing and two times faster speed to our clients.
                  </strong>
                </p>
              </Link>
            </div>

            <div
              className="mx-3 shadow project-img p-0"
              style={{
                position: "relative",
              }}
            >
              <Link to="/OurServices/IdustryVisit">
                <img
                  src={services2}
                  className="service-img rounded m-0"
                  style={{ height: "100%" }}
                  onMouseOver={this.handleMouseUp}
                  onMouseOut={this.handleMouseDown}
                />
                <h3
                  className="textONimg text-white text-center mx-5 px-3"
                  style={{ position: "absolute", bottom: 50, zIndex: 0 }}
                >
                  Industrial Panel
                </h3>
                <p
                  className="d-none p-5 m-1 text-dark project-text"
                  style={{ position: "absolute", top: 30, zIndex: -20 }}
                >
                  <strong>
                    We hear and read many manufacturing details based on
                    different sources with virtual knowledge. We need to know
                    practical machinery of this theoretical facts.
                  </strong>
                </p>
              </Link>
            </div>
            <div
              className="mx-3 project-img shadow"
              style={{
                position: "relative",
              }}
            >
              <Link to="/OurServices/IOT">
                <img
                  src={services3}
                  className="service-img rounded"
                  style={{ height: "100%" }}
                  onMouseOver={this.handleMouseUp}
                  onMouseOut={this.handleMouseDown}
                />
                <h3
                  className="textONimg text-white text-center mx-5 px-3"
                  style={{ position: "absolute", bottom: 50, zIndex: 0 }}
                >
                  IOT
                </h3>
                <p
                  className="d-none p-5 m-1 text-dark project-text"
                  style={{ position: "absolute", top: 30, zIndex: -20 }}
                >
                  <strong>
                    We bring low code, low cost, simplified way to understand,
                    multiple testing and two times faster speed to our clients.
                  </strong>
                </p>
              </Link>
            </div>
            <div
              className="mx-3 project-img shadow"
              style={{
                position: "relative",
              }}
            >
              <Link to="/OurServices/PCBdesign">
                <img
                  src={services4}
                  className="service-img rounded"
                  style={{ height: "100%" }}
                  onMouseOver={this.handleMouseUp}
                  onMouseOut={this.handleMouseDown}
                />
                <h3
                  className="textONimg text-white text-center mx-5 px-3"
                  style={{ position: "absolute", bottom: 50, zIndex: 0 }}
                >
                  PCB Designs
                </h3>
                <p
                  className="d-none p-5 m-1 text-dark project-text"
                  style={{ position: "absolute", top: 30, zIndex: -20 }}
                >
                  <strong>
                    We need to know about the designing techniques and practices
                    to manufacture PCB. We are here to give you information
                    about PCB designing.
                  </strong>
                </p>
              </Link>
            </div>
          </div>
        </section>
        <SectionWithBgImg
          imgUrl={ideaBgImg}
          // heading="Be a part of us..."
          text={
            <div className="d-flex align-items-center imgBgdiv">
              <div>
                <h2 className="my-5">Be a part of us...</h2>
                <p className="">
                  We work on new ideas and implement them in real world. We
                  welcome creative minds and help them to implement their ideas.
                  We support new start-up businesses. If you want to join us
                  then we are here for you.
                </p>

                <div className="text-end">
                  <p>
                    <Link to="/ideaSubmission">
                      <button className="btn btn-primary">
                        Share Your Ideas
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          }
          img=""
        />
        {this.state.Projects.map((project, index) => {
          this.P_images.push(project.thumbnail);
        })}
        <div className="my-5">
          <h2 className="container">Portfolio</h2>
          <hr className="container" />
          <div className="d-md-flex justify-content-between container">
            <SectionWithImg
              noHr={true}
              text={
                <div>
                  <p>
                    We may be new in industry but, we have been working in this
                    field for long and here are some <strong>amazing </strong>
                    and <strong>useful products </strong>developed by us in past
                    few years which are showing great results in society.
                  </p>
                  <div className="my-5 ">
                    <Link to="/Portfolio">
                      <button className="btn btn-primary">
                        See Our Projects
                      </button>
                    </Link>
                  </div>
                </div>
              }
            />
            <Link to="/Portfolio">
              <Carousel
                noText={true}
                img1={this.P_images[0]}
                img2={this.P_images[1]}
                img3={this.P_images[2]}
                nobtn={true}
              />
            </Link>
          </div>

          <div
            className="container-sm my-5"
            id="msgFounder"
            // style={{ maxWidth: "70%" }}
          >
            <h4 className="my-5">Message from our Founders:</h4>
            <Carousel
              img1={msg1Img}
              img2={msg2Img}
              img3={msg3Img}
              noText={true}
              nobtn={true}
              time={2000}
            />
          </div>
        </div>
        <h2 className="container mt-3">Our Clients</h2>
        <hr className="container" />
        <div className="clients-slider d-flex flex-column">
          <div className="d-flex">
            <img src={c1Img} className="m-2" />
            <img src={c2Img} className="m-2" />
            <img src={c3Img} className="m-2" />
            <img src={c4Img} className="m-2" />
            <img src={c5Img} className="m-2" />
            <img src={c6Img} className="m-2" />
            <img src={c7Img} className="m-2" />
            <img src={c8Img} className="m-2" />
            <img src={c9Img} className="m-2" />
            <img src={c10Img} className="m-2" />
            <img src={c11Img} className="m-2" />
            <img src={c12Img} className="m-2" />
            <img src={c13Img} className="m-2" />
            <img src={c14Img} className="m-2" />
            <img src={c15Img} className="m-2" />
          </div>
          {/* <div className="d-flex"></div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
