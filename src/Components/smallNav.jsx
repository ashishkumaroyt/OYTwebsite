import React from "react";
import SocialMediaIcons from "./socialIcons";

const SmallNav = () => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center container-fluid text-white shadow"
      style={{ backgroundColor: "#24ade3" }}
    >
      <div>
        <small className="m-0 p-0 d-none d-sm-block">
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
        </small>
      </div>
      <div>
        <small className="m-0 p-0">
          <SocialMediaIcons sMedia="envelope-fill"></SocialMediaIcons>
          contact@oytechnology.com /
          <SocialMediaIcons sMedia="telephone-fill"></SocialMediaIcons>+91
          8285524418
        </small>
      </div>
    </nav>
  );
};

export default SmallNav;
