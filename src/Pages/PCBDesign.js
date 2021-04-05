import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SectionWithImg from "../Components/sectionWithImage";
import image from "../Images/pcbPage.png";

function PCBDesignPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>PCB Design</title>
      </Helmet>
      <SectionWithImg
        imgUrl={image}
        heading="PCB Design"
        text={
          <div>
            <p>
              Have you heard about the word PCB? Do you know how it is designed
              in manufacturing world? How do industries design it in a bulk
              quantity with higher quality and accuracy? First of all, we need
              to know about the designing techniques and practices. We are here
              to give you information about PCB designing. There are few steps
              that are needed to be followed carefully.
            </p>
            <ol>
              <li>
                <h5>Cutting</h5>
                <p>
                  Copper clad plates are cut into desired size using cutting
                  tool so that cost can be reduced. Now it is cleaned using
                  water and scrubber. After that it is dried by heater for 5
                  minutes.
                </p>
                <li>
                  <h5>Stack and pin for drilling</h5>

                  <p>
                    do you know the meaning of stack? Stack is just the layout
                    of layers like VCC, GND, used on PCBs in a sequential order
                    for easy designing. WE can use two styles where first is a
                    board with external pairs and second is a board with
                    internal pairs based on core layer. A board with external
                    pairs gives the idea about drill pins layer between copper
                    layers on multilayer PCBs, a core for copper layer on the
                    top and a core for bottom copper layer and a contrast at the
                    center for the internal pairs style and we build core on the
                    central layer outwards to exterior layers in the external
                    pairs style. Power layers are assembled in a way so that
                    power supply layer can be remain unused on rest mode
                    conditions. We have to check the selected measurements of
                    drilling holes specified ranges are used. We just need to
                    select right measurements.
                  </p>
                  <p>
                    PCB boards are sticked together then CNC machine or drilling
                    machine can be used to make holes on them according to the
                    computer design which is called drilling process. Now we
                    have to check the hole patterns carefully. Carbon is used to
                    coat the drilled holes due to conductivity towards current
                    flow.
                  </p>
                </li>
                <li>
                  <h5>Lamination</h5>
                  <p>
                    As this term indicates a protective covering of transparent
                    thin layer is used here before tracing required circuit
                    image on special purpose cloth using CRG paper by covering
                    the whole image. Now UV light sensitive plate is to be
                    laminated by using CRG paper. This is a resist film towards
                    copper bank.
                  </p>
                </li>
                <li>
                  <h5>Tracking</h5>
                  <p>
                    Laminated circuit image pattern that is to be traced on
                    special purpose cloth is placed under UV light or direct
                    image using laser light to print the design on this cloth.
                    Your track is ready to be traced on PCB board.
                  </p>
                </li>
                <li>
                  <h5>Printing circuit image</h5>
                  <p>
                    Now ink is used to print on PCB boards by placing the track
                    on PCB board. Here we can see printed image on PCB. These
                    inked PCBs are dried by heating using heater for 20-30 mins.
                    As we know copper reacts with ammonia very easily, so here
                    we use ammonia to remove copper except the mask portion
                    where inked print is placed on PCB board. Ink is
                    non-reactive to ammonia so copper under the inked part will
                    remain on it. Now this is dipped in sulphuric acid to
                    preserve this ink properly.
                  </p>
                </li>
                <li>
                  <h5>Removal of ink Traces</h5>
                  <p>
                    Caustic soda is used to remove inked traces by dipping for a
                    while without scrubbing. If you do not have caustic soda you
                    can just scrub it to remove ink until copper surface is seen
                    properly. Put it into water for few minutes.
                  </p>
                </li>
                <li>
                  <h5>Masking</h5>
                  <p>
                    A layer of ink is exposed on PCB by using green ink and is
                    dried in heater as mentioned above during tracking process,
                    this process is known as masking in industry.
                  </p>
                </li>
                <li>
                  <h5>Tinning</h5>
                  <p>
                    As we know copper get oxidised when explored to air which we
                    do not want in case of PCB design. Tinning process is done
                    by using to secure the copper circuit PCB board. Circuit is
                    printed on the backside of the PCB board for easy
                    understanding. Tin solder powder (lead free and >90% tin)
                    with HCl acid is mixed together for overnight for best
                    results. PCBs are immersed in this solution so that tin
                    layer can be formed to protect from future chemical
                    reactions with copper layer.
                  </p>
                </li>
                <li>
                  <h5>Packing</h5>
                  <p>
                    After completing the manufacturing process it is necessary
                    to pack PCBs carefully. First of all, we need to check the
                    damage before doing it. If there is no error on PCBs then it
                    is ready for packaging. Here, we use vacuum seal packing
                    method then boxes are used for final touch with required
                    label marking on it with inspection then are delivered to
                    customers on their doorsteps.
                  </p>
                </li>
              </li>
            </ol>
          </div>
        }
      />
    </>
  );
}

export default PCBDesignPage;
