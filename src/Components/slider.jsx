import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./css/slider.css";

function Slider(props) {
  function slideLeft() {
    const scrollLength = -1 * document.querySelector(".slide-img").offsetWidth;

    document
      .querySelector("#slide-div")
      .scrollBy({ left: scrollLength, behavior: "smooth" });
  }
  function slideRight() {
    const scrollLength = document.querySelector(".slide-img").offsetWidth;

    document
      .querySelector("#slide-div")
      .scrollBy({ left: scrollLength, behavior: "smooth" });
  }
  return (
    <div id="container-div">
      <div id="slide-div">
        <div id="img-list" className="d-flex">
          {props.imgUrl.map((image, i) => {
            return (
              <div className="slide-img m-2" key={i}>
                <Link to={props.link[i]}>
                  <img src={image} alt="image" className="slider-img" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <button id="left-slide-btn" onClick={() => slideLeft()}>
        <i className="bi bi-arrow-left"></i>
      </button>
      <button id="right-slide-btn" onClick={() => slideRight()}>
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
}

export default Slider;
