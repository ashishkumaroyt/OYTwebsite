import React from "react";
import { Link } from "react-router-dom";
import "./css/list.css";

function ContentList(props) {
  return (
    <div className="text-md-center">
      <h5>{props.heading}</h5>
      <ul className="p-0 text-white">
        {props.content.map((text, index) => {
          return (
            <Link to={props.links[index]} key={index}>
              <li className="text-white">{text}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default ContentList;
