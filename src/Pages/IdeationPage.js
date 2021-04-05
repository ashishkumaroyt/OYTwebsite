import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SectionWithImg from "../Components/sectionWithImage";
import image from "../Images/ideationPage.png";

function IdeationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ideation Service</title>
      </Helmet>
      <SectionWithImg
        imgUrl={image}
        heading="Ideation"
        text={
          <div>
            <p>
              We bring low code, low cost, simplified way to understand,
              multiple testing and two times faster speed to our clients.
            </p>
            <h5>IDEATION</h5>
            <p>
              whenever an idea comes into our mind and we express it to others,
              we get nothing but a long conversation till the next idea of
              product manufacturing repeats and this cycle of creative ideas are
              buried. We are here to implement your ideas in real world.
            </p>
            <h5>INNOVATION PLANNING</h5>
            <p>
              We discuss the needs and expectations of our customers with
              desired products. We make a layout of required technology, tools,
              components, additional creativity etc. are the basic platforms.
              Approximate time deadline of product is necessary to be planned.
              Expected occurring problems are discussed with team members of
              different panels.
            </p>
            <h5>TECHNOLOGY SCOUTING</h5>
            <p>
              There are many technologies like embedded system, Internet of
              things, Raspberry pi, python etc. in the market. we choose the
              technology based on simplicity, desired output and low codes and
              low cost used in designing the panel.
            </p>
            <h5>PRODUCT ARCHITECTURE PLANNING</h5>
            <p>
              We work on the physical assembling in this process. To respond to
              an environmental necessity, we design products so as to use
              creative skills with new way for artistic interpretation and
              planning. To design products, many of the explored and addressed
              principles can be applied. Here interfacing of hardware and
              software is applied. we work on how efficiently used components
              are assembled on physical appearance of products. we design
              product in a manner so that minimum cost and maximum accuracy can
              be achieved.
            </p>
            <h5>DEVELOPMENT AND SOFTWARE</h5>
            <p>
              software part is important, it gives commands to all the hardware
              components which are used in product. So firstly, we focus on
              coding part which communicates with products in the programming
              language which component parts understand.
            </p>
            <h5>SYNCHRONIZATION</h5>
            <p>
              Products are synchronized simultaneously with the process of
              software development and testing of prepared hardware.
            </p>
            <h5>TESTING OF PROTOTYPE AND IMPROVING</h5>
            <p>
              When we invent a product, there are many cases where that is not
              working properly. So we check the product by giving inputs to see
              the output. We can refine and validate our designs so that brand
              can release the right products. In that case this product is known
              as prototype. There are some general examples of prototypes where
              power consumption may be high, error in sensing parameters, device
              damage etc. are tested carefully before final touch of product. We
              can refine and validate your designs so your brand can release the
              right products.
            </p>
            <h5>USER INTERFACING</h5>
            <p>
              Have you noticed there are many products where a simple and
              communicative way is used to start and control the devices, for
              examples some buttons, switches, sensors on microwave, motors,
              elevators respectively etc. where a single click can interact with
              device. We keep it in an easy way so that every person can use it
              without any extra efforts.
            </p>
            <h5>MASS MANUFACTURING</h5>
            <p>
              When we produce products in a large amount on industry level, we
              need to make a systematic way with efficient manner, minimum time
              consumption, least cost, maximum accuracy and standard tooling
              skills. We work on preserving ways to avoid damage of product and
              increase the reliability toward products.
            </p>
          </div>
        }
      />
    </>
  );
}

export default IdeationPage;
