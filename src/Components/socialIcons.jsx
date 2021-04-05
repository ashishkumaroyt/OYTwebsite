import React from "react";
import { Link } from "react-router-dom";

const SocialMediaIcons = (props) => {
  return (
    <a href={props.link}>
      <i className={`bi bi-${props.sMedia} text-white mx-2`}></i>
    </a>
  );
};

export default SocialMediaIcons;
