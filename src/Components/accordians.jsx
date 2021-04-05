import React from "react";
import "./css/accordian.css";

function Accordian(props) {
  return (
    <div className="px-2 py-1">
      <div className="accordion accordion-flush" id="accordionFlushExample ">
        <div className="accordion-item">
          <h2 className="accordion-header bg-primary" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapseOne${props.count}`}
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              {props.heading}
            </button>
          </h2>
          <div
            id={`flush-collapseOne${props.count}`}
            className="accordion-collapse collapse"
            aria-labelledby={`flush-headingOne${props.count}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
