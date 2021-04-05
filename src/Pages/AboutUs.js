import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import VideoBgSection from "../Components/videoBgSection.jsx";
import SectionWithImg from "../Components/sectionWithImage.jsx";
import DivWithVideo from "../Components/secWithVideo.jsx";
import SectionWithBgImg from "../Components/sectionBgImage";
import CardText from "../Components/cardWithText.jsx";
import aboutSVG from "../Images/aboutUs.png";
import valuesBg from "../Images/companyValues.png";
import "./About.css";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <VideoBgSection />
      <SectionWithImg
        heading="About Us"
        text={
          <div className="d-md-flex">
            <div>
              <p>
                “Ideas and Technological discoveries are the driving engines of
                economy.”
              </p>
              <p>
                OxYmora Technology Pvt. Ltd. is a leading MCA (Ministry
                Corporation of Affairs) approved, Electronics Product and
                service Provider Company.
              </p>
              <p>
                We create a better world full of richer digital experience
                through innovative technology and product. We are the patrons
                who enable our youth to bring innovative ideas and strategies
                for their digital transformation and automation.
              </p>
              <p>
                We are responsible for providing sales and marketing, trading,
                technical support and consumer services on electronic components
                and accessories. We are able to source material and components
                used in manufacturing of electronics including PCB Designing.
              </p>
              From Engineering to application development, we help our clients
              to find the right problems to solve them effectively.
            </div>
            <div>
              <img src={aboutSVG} style={{ width: "100%" }} />
            </div>
          </div>
        }
      />
      {/* ACHIEVEMENTS SECTION */}
      <DivWithVideo
        heading="How We Work?"
        vUrl="https://www.youtube.com/embed/0yPQRLp5aLA"
        text={
          <div className="pt-2">
            <strong>OxYmora is a team of your own.</strong>
            <p>
              Our prime objective is customer satisfaction and our’s pride.
              Basically we deal in Electronics Embedded Product and IoT Product
              Development & Solutions. Our vision is to provide our customers
              with unparalleled experience by making the best product & build
              the best electronic research and development programs.
            </p>
            <p>
              For all the educational development , we want a part , either with
              them or by them. So we have Innovator’s Studio for Faculties &
              students of Schools and colleges respectively.
            </p>
          </div>
        }
      />

      <SectionWithBgImg imgUrl={valuesBg}>
        <div className="d-md-flex">
          <SectionWithImg
            noHr={true}
            heading="Mission"
            text={
              <div className="text-dark">
                <p>
                  Our mission is to provide our customers with unparalleled
                  experience by making the best product. To create wealth for
                  all our stakeholders by building highly successful business
                  based on a customer approach and contribute to the community.
                </p>
                <p>
                  We are here for our clients make distinctive, lasting, and
                  substantial improvements in their performance and to build a
                  great firm that attracts, develops excites and retains
                  exceptional people.We believe we will be successful if our
                  clients are successful.
                </p>
              </div>
            }
          />
          <SectionWithImg
            noHr={true}
            heading="Vision"
            text={
              <div className=" vision-text text-dark">
                <p>
                  Best services are delivered through collaboration, that’s why
                  we treat each client as our partner.We continuously develop
                  and expand strategic products in our consumer electronics
                  division.
                </p>
                <p>
                  We give our 100% to full-fill the requirements of our clients.
                  We pride ourselves on our process, our craft and our attention
                  to detail. We also put a lot of time into nurturing our
                  relations with our clients. We believe in charm, good manners
                  and punctuality and a healthy dose of humor. We take pride in
                  our work but don’t take ourselves too seriously.
                </p>
              </div>
            }
          />
        </div>

        <div className="text-center ">
          <h2 className="my-5 text-dark">Company Values</h2>
          <div className="d-md-flex justify-content-center text-dark">
            <CardText heading="" text="" className="" />
            <CardText
              heading={<h3>Integrity</h3>}
              text={
                <>
                  <p>
                    “Profit and customer satisfaction is the significance of
                    business.”
                  </p>
                  <p>
                    Oxymora technology assures: what we say, we do and build the
                    massive trust and satisfaction with customers, employees and
                    our partners.
                  </p>
                </>
              }
            />
            <CardText heading="" text="" />
          </div>
          <div className="d-md-flex justify-content-center text-dark">
            <CardText
              heading={<h3>Saftey</h3>}
              text={
                <>
                  <p>
                    With all safety and security of zero rates of accidents,
                    Oxymora Technology provides all the assurity regarding
                    safety, a value decision considered by management,
                    administrators, foreman and field employees. By the award
                    winning safety values, Oxymora Technology maintains all the
                    safety and privacy of data and products of clients. we
                    satisfied and encouraged to keep safety and security at
                    every action
                  </p>
                </>
              }
            />
            <CardText
              heading={<h3>Innovation</h3>}
              text={
                <>
                  <p>
                    With the continuous and updated innovation, we must be
                    active enough to embrace and deals with the new ideology and
                    encourage employees to improve and be updated with the new
                    innovations. Oxymora technology utilizes the latest
                    innovation and technology in industry to provide highest
                    quality in most productive way.
                  </p>
                </>
              }
            />
            <CardText
              heading={<h3>Quality</h3>}
              text={
                <>
                  <p>
                    We deals with highest and best quality material and services
                    for every project, with the satisfaction and trustworthy
                    relationships with our suppliers and active participation
                    with the union we produce and utilize with best insulation
                    materials, ensure updated and excellent training for
                    embedded fields.
                  </p>
                </>
              }
            />
          </div>
          <div className="d-md-flex justify-content-center text-dark">
            <CardText
              heading={<h3>Pragmatic</h3>}
              text={
                <>
                  <p>
                    The best way to promote and protect opportunity is through
                    collaboration, consensus-building, and pragmatic
                    problem-solving.
                  </p>
                </>
              }
            />
            <CardText heading="" text="" />
            <CardText
              heading={<h3>Leadership</h3>}
              text={
                <>
                  <p>
                    Outstanding leaders go out of the way to boost the
                    self-esteem of their personnel. If people believe in
                    themselves, it’s amazing what they can accomplish.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </SectionWithBgImg>
    </React.Fragment>
  );
}

export default AboutUs;
