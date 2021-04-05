import React from "react";
import "./css/sectionBgImg.css";

function SectionWithBgImg(props) {
  return (
    <div
      className={`bg-img-div mt-0 mb-0 py-5`}
      style={{
        backgroundImage: `url("${props.imgUrl}")`,
        height: props.divHeight ? props.divHeight : "initial",
      }}
    >
      <div className="container">
        <h2>{props.heading}</h2>
        {props.children}
        <div>{props.text}</div>
      </div>
    </div>
  );
}

export default SectionWithBgImg;
