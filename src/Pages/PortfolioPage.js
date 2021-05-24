import React, { Component } from "react";
import image from "../Images/portfolioImg.png";
import axios from "axios";

class PortfolioPage extends Component {
  state = {
    Projects: [],
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get("https://api.oytechnology.com/Projects")
      .then((res) => {
        console.log(res.data);
        this.setState({
          Projects: res.data,
        });
      })
      .catch((err) => {
        <div>Something Went Wrong. Please Re-Try </div>;
        alert(err);
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="d-md-flex flex-wrap justify-content-around container">
          {this.state.Projects.map((project) => {
            return (
              <a href={project.pdf_file} style={{ width: "25%" }}>
                <img
                  src={project.thumbnail}
                  className="mx-auto my-3"
                  style={{ width: "100%" }}
                />
              </a>
            );
          })}
        </div>
        <h2 className="text-primary text-center">
          <strong>Way More To Go ....</strong>
        </h2>
      </>
    );
  }
}

export default PortfolioPage;
