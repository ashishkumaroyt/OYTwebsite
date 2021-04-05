import React from "react";
import { Link } from "react-router-dom";
import SectionWithImg from "../Components/sectionWithImage";
import img404 from "../Images/notFound404.png";

function NotFound() {
  return (
    <SectionWithImg
      heading={<img src={img404} style={{ width: "100%" }} />}
      text={
        <h3>
          Return To <Link to="/">HOME</Link>
        </h3>
      }
    />
  );
}

export default NotFound;
