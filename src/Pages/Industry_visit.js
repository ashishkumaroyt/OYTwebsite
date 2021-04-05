import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SectionWithImg from "../Components/sectionWithImage";
import image from "../Images/industrialPage.png";

function IndustryVisit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Industry Visit</title>
      </Helmet>
      <SectionWithImg
        imgUrl={image}
        heading="Industry Visit"
        text={
          <div>
            <p>
              Observation brings a difference. We hear and read many
              manufacturing details based on different sources with virtual
              knowledge. We need to know practical machinery of this theoretical
              facts. Every industry has different ways and systems to deal with
              product manufacturing so it is very important to visit Industry.
              Industry visit gives an overview of mechanism used in respective
              field. Share your ideas with us, we are here to work on it.
            </p>
            <h5>INDUSTRY PROCESS</h5>
            <p>
              Industries have experience of manufacturing many products with
              accuracy and systematic way.
            </p>
            <ol>
              <li>
                Deciding the technologies used in Industry based on industry.
              </li>
              <li>
                Preparing the layout to assemble components (motor, CT, control
                valve etc.)
              </li>
              <li>Fabrication of industry.</li>
              <li>]According to industry, select -Auto or Manual panel. </li>
              <li>
                Installation of panel (fixing the panel on a place where it is
                going to be operated).
              </li>
              <li>Testing.</li>
            </ol>
            <h5>SELECTING TYPES OF PANEL</h5>
            <p>
              Have you ever heard a seller describing some special features like
              power, Input output voltage, current, industry load. These
              parameters are decided by manufacturing industry based on
              utilization. Team of selecting panel decides type of panel on the
              basis of technologies, hardware components and user interfacing
              parts of devices. Industries have experience of manufacturing many
              products with accuracy and systematic way. We need to learn the
              whole process like selecting the programming language, least cost,
              least power consumption, maximum efficiency while preferring the
              tools and components used in it.
            </p>
            <h5>PANEL FABRICATION</h5>
            <p>
              There are many types of metal sheets, buttons, display screens,
              wires and many more components etc. These are different in weight,
              dimension, shape and size, so we need to decide them on the basis
              of least cost, maximum efficiency, power consumption.
            </p>
            <ol>
              <li>selection of metal sheet</li>
              <li>calculating dimensions of panel.</li>
              <li>determining the number of Equipment* </li>
            </ol>
            <h5>COLLECT EQUIPMENT.</h5>
            <h5>MANUFACTURING PANEL.</h5>
            <h5>COMMISSIONING</h5>
            <p>
              Industry considers the parameters of standard form. Testing of
              each component and explaining all the functions and features to
              the person who is going to operate prepared panel is known as
              commissioning in simple words. All the steps of testing a panel
              are individually done. We explain the working for a long life of
              panel to avoid damages. If there is any kind of problem occurs at
              the timing of testing then we resolve it.
            </p>
            <h5>SLD(SINGLE LINE DIAGRAM)</h5>
            <p>
              Do you know how do these complex connections are described in a
              simple way? Each are represented using lines on a paper. Single
              line diagram gives an easy understanding to explain internal
              connections of panel.
            </p>
          </div>
        }
      />
    </>
  );
}

export default IndustryVisit;
