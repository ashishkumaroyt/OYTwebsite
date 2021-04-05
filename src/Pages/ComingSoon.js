import React from "react";
import { Helmet } from "react-helmet";
import comingSoonImg from "../Images/comingSoon.png";

function ComingSoon() {
  return (
    <div className="text-center">
      <Helmet>
        <title>ComingSoon</title>
      </Helmet>
      <h1>COMING SOON....</h1>
      <img src={comingSoonImg} style={{ width: "60%" }} />
    </div>
  );
}
export default ComingSoon;
