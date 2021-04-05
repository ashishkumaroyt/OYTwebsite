import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CardText from "../Components/cardWithText.jsx";
import SectionWithImg from "../Components/sectionWithImage.jsx";
import SectionWithBgImg from "../Components/sectionBgImage.jsx";
import whyOytPic from "../Images/whyOYT.png";
import "./Career.css";
import whyOytBg from "../Images/whyOytBg.png";
import positionBg from "../Images/positionsBg.png";

class CareerPage extends Component {
  state = {
    jobs: [],
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
    axios
      .get("http://13.233.179.209:8000/api-blog/jobs")
      .then((res) => {
        console.log(res.data);
        this.setState({
          jobs: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        {" "}
        <Helmet>
          <title>Career</title>
        </Helmet>
        <SectionWithBgImg
          heading="Why OYT?"
          text={
            <div className="d-flex ">
              <ul>
                <li>
                  <i class="bi bi-dot"></i>CORE COMPANY OF ELECTRONICS FIELD.
                </li>
                <li>
                  <i class="bi bi-dot"></i>RESEARCH AND DEVELOPMENT COMPANY.
                </li>
                <li>
                  <i class="bi bi-dot"></i>IMPLEMENTATION OF NEW IDEAS.
                </li>
                <li>
                  <i class="bi bi-dot"></i>INDUSTRY PROCESS IN INNOVATIVE WAYS.
                </li>
                <li>
                  <i class="bi bi-dot"></i>BETTER TEAM COMPANIONSHIP AND GOOD
                  EVIRONMENT.
                </li>
                <li>
                  <i class="bi bi-dot"></i>
                  REAL EXPERIENCE OF EMBEDDED SYSTEM and IOT based products.
                </li>
                <li>
                  <i class="bi bi-dot"></i>
                  DEVELOPMENT OF NEW MOBILE APPLICATIONS AND TOOLS TO CONTROL
                  ELECTRONICS DEVICES.
                </li>
                <li>
                  <i class="bi bi-dot"></i>LEARNING OF PCB DESIGNING.
                </li>
                <li>
                  <i class="bi bi-dot"></i>INDIVIDUAL GROWTH OF TALENTS AND
                  SKILLS.
                </li>
                <li>
                  <i class="bi bi-dot"></i>BETTER FUTURE SCOPE.
                </li>
              </ul>
            </div>
          }
          imgUrl={whyOytBg}
        />
        <SectionWithImg
          heading="How to reach us"
          text={
            <div className="d-flex justify-content-around">
              <div>
                <p>There are many ways to contact us:</p>
                <ol>
                  <li>Drop us a mail on hr.oytechnology@gmail.com,</li>
                  <li>Contact us @ +91 8285524418,</li>
                  <li>
                    or, Directly visit us at our address:- 83/57, Sector 8,
                    Pratap Nagar, Jaipur, Rajasthan 302033.
                  </li>
                </ol>
              </div>

              <img
                src={whyOytPic}
                alt="whyOytPic"
                className="d-none d-md-block rounded "
                style={{ width: "40%" }}
              />
            </div>
          }
        />
        <div className="container">
          <h2>Current Openings</h2>
          <hr />
          <div className="d-md-flex flex-wrap justify-content-center">
            {this.state.jobs.map((job, index) => {
              return (
                <CardText
                  superHead={job.title}
                  heading={<small>{job.place}</small>}
                  bgimg={positionBg}
                  text={
                    <div>
                      <ul className="p-0">
                        <div className="d-flex flex-wrap">
                          {job.skills
                            .trim()
                            .split(",")
                            .map((skill) => {
                              return (
                                <li className="px-2">
                                  <i className="bi bi-dot"></i>
                                  {skill}
                                </li>
                              );
                            })}
                        </div>
                      </ul>
                      <Link
                        to={{
                          pathname: `/jobApplication/${index}`,
                          state: job.title,
                        }}
                      >
                        <button className="btn btn-primary"> Apply</button>
                      </Link>
                    </div>
                  }
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default CareerPage;
//       <div className="container">
//         <h2>Current Openings</h2>
//         <hr />
//         <div className="row">
//           {positions.map((position, index01) => {
//             return (
//               <div
//                 className="col-md-6 position-div"
//                 // style={{ backgroundImage: `url("${positionBg}")` }}
//               >
//                 <CardText
//                   superHead={Object.keys(position)[0]}
//                   heading=""
//                   bgimg={positionBg}
//                   text={
//                     <div>
//                       <small>Jaipur, Rajasthan</small>
//                       <ul className="p-0">
//                         <div className="">
//                           {Object.values(position).map((skill) => {
//                             return (
//                               <div className="row">
//                                 {skill.map((s, i) => {
//                                   return (
//                                     <div className="col-md-6">
//                                       <li className="px-2" key={i}>
//                                         <i class="bi bi-dot"></i>
//                                         {s}
//                                       </li>
//                                     </div>
//                                   );
//                                 })}
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </ul>
//                       <button
//                         className="btn btn-primary"
//                         id={index01}
//                         onClick={(e) => handleClick(e.target.id)}
//                       >
//                         Apply
//                       </button>
//                       <div className="showInfo" id={`pos${index01}`}>
//                         Mail Your Resume/CV @ somemail.com
//                       </div>
//                     </div>
//                   }
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default CareerPage;
