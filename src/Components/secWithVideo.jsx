import React from "react";
import "./css/embededVideo.css";

function DivWithVideo(props) {
  return (
    <div className="container mt-5">
      <h2>{props.heading}</h2>
      <hr />
      <div className="d-lg-flex justify-content-center">
        <div className="m-3">
          <iframe
            width="555"
            height="312"
            className="video-embeded"
            src={props.vUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="px-3">{props.text}</div>
      </div>
    </div>
  );
}

export default DivWithVideo;
