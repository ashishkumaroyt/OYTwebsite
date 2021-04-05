import React from "react";
import "./css/sectionWithImg.css";

function SectionWithImg(props) {
  return (
    <>
      {props.imgUrl ? (
        <div>
          <img
            src={props.imgUrl}
            alt="Service Image"
            style={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className={props.nopadding ? null : "p-3"}
          />
        </div>
      ) : null}
      <div className="container-md my-3 pt-3">
        <h2 className="mx-3 py-2 text-dark">{props.heading}</h2>
        {props.noHr ? null : <hr />}
        {props.children}
        <div className="d-md-flex justify-content-around container-md">
          <div className="pr-2">{props.text}</div>
          {/* <div>
          <img src={props.imgUrl} alt="Img01" className="img-section" />
        </div> */}
        </div>
      </div>
    </>
  );
}
export default SectionWithImg;
