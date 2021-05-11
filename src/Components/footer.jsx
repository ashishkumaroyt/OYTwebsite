import React from "react";
import ContentList from "./footerContentList";
import QueryForm from "./queryForm";
import SocialMediaIcons from "./socialIcons.jsx";
import logoImg from "../Images/logo.png";
import "./css/footer.css";

function Footer() {
  const news = ["The office is shifted @ Pratap Nagar, Jaipur."];
  return (
    <div className="bg-dark text-white py-5">
      <div className="container-md d-lg-flex justify-content-center">
        <div className="mx-3 footerinfo-div">
          <img
            src={logoImg}
            alt="OYTechnology Pvt. Ltd."
            className="mb-3 footerlogo"
          />
          <p className="m-0">
            <SocialMediaIcons sMedia="house" />
            83/57, Sector 8, Pratap Nagar
          </p>
          <p>Jaipur, Rajasthan - 302033</p>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="300"
                height="80"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=OxYmora%20Technology%20Pvt.%20Ltd.&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
          <p>
            <SocialMediaIcons sMedia="telephone" />
            +91-8285524418
          </p>
        </div>
        <hr className="d-lg-none" />
        <div
          className="d-sm-flex justify-content-around mx-auto"
          style={{ width: "80%" }}
        >
          <ContentList
            heading="Quick Links"
            content={["Home", "About Us", "Services", "Career", "Blogs"]}
            links={["/", "/aboutUs", "/ourServices", "/careers", "/blogs"]}
          />
          <div className="my-4 my-lg-0">
            <h5>
              Ask Here <SocialMediaIcons sMedia="arrow-bar-down" />
            </h5>
            <QueryForm />
          </div>
          <div>
            <h5>Latest News</h5>
            <hr />
            <ul className="p-0">
              {news.map((text) => {
                return <li>{text}</li>;
              })}
            </ul>
            <div className="d-flex mt-5">
              <SocialMediaIcons
                sMedia="facebook"
                link="https://www.facebook.com/OxYmoraTechnology"
              />
              <SocialMediaIcons
                sMedia="twitter"
                link="https://twitter.com/oxymorat"
              />
              <SocialMediaIcons
                sMedia="youtube"
                link="https://www.youtube.com/channel/UCJ_7bpC5O8l1fOqlc-DcbDg"
              />
              <SocialMediaIcons
                sMedia="linkedin"
                link="https://www.linkedin.com/in/oxymora-technology-9ab649165/"
              />
              <SocialMediaIcons
                sMedia="instagram"
                link="https://www.instagram.com/oxymoratechnology/?hl=en"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <small className="d-flex justify-content-center">
        © 2020 OxYmora Technology Pvt. Ltd. - All Rights Reserved
      </small>
    </div>
  );
}

export default Footer;

{
  /* <style></style> */
}
{
  /* <style></style> */
}
