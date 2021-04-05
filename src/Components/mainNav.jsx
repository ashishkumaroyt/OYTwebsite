import React from "react";
import { Link } from "react-router-dom";
import "./css/mainNav.css";
import SocialMediaIcons from "./socialIcons";
import { Component } from "react";
import logoImg from "../Images/logo.png";
import fullLogoImg from "../Images/fullLogo1.png";

class MainNav extends Component {
  handleScroll = () => {
    if (window.pageYOffset > 150) {
      document.querySelector(".navbar").className =
        "navbar navbar-expand-md py-0 sticky-top";
      document.querySelector("#brand-img-mini").className =
        "navbar-brand text-white mx-auto brand-logo-show";
      document.querySelector("#brand-img-full").className =
        "navbar-brand text-white mx-auto brand-logo-hide";
    }
    if (window.pageYOffset < 150) {
      document.querySelector(".navbar").className =
        "navbar navbar-expand-md py-0 bg-dark sticky-top";
      document.querySelector("#brand-img-mini").className =
        "navbar-brand text-white mx-auto brand-logo-hide";
      document.querySelector("#brand-img-full").className =
        "navbar-brand text-white mx-auto brand-logo-show";
    }
  };
  handleClick = () => {
    document.querySelector(".navbar-collapse").className =
      "collapse navbar-collapse";
  };

  render() {
    window.addEventListener("scroll", this.handleScroll);

    return (
      <nav className="navbar navbar-expand-lg bg-dark py-0 sticky-top shadow">
        <div className="container-fluid">
          <Link
            to="/"
            id="brand-img-mini"
            className="navbar-brand text-white mx-auto brand-logo-hide"
          >
            <img
              src={logoImg}
              alt="OY Technology Pvt. Ltd."
              className="img-oyt mx-md-5"
            />
          </Link>
          <Link
            to="/"
            id="brand-img-full"
            className="navbar-brand text-white mx-auto brand-logo-show"
          >
            <img
              src={fullLogoImg}
              alt="OY Technology Pvt. Ltd."
              className="img-oyt mx-md-5"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon p-0 fw-bold">
              <SocialMediaIcons sMedia="list" />
            </span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ zIndex: "100" }}
          >
            <ul className="navbar-nav mx-sm-auto text-center ">
              <li className="nav-item links">
                <Link
                  to="/"
                  className="nav-link text-white pr-5 px-md-3"
                  onClick={this.handleClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item links">
                <Link
                  to="/aboutUs"
                  className="nav-link text-white  pr-5 px-md-3"
                  onClick={this.handleClick}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown links">
                <Link
                  to=""
                  className="nav-link text-white dropdown-toggle pr-5 px-md-3"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul
                  className="dropdown-menu  p-0 text-center pr-5 px-md-3"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      to={{
                        pathname: "/OurServices",
                      }}
                      className="dropdown-item text-white links"
                      onClick={this.handleClick}
                    >
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/OurServices/IOT",
                      }}
                      className="dropdown-item text-white links"
                      onClick={this.handleClick}
                    >
                      IOT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/OurServices/PCBdesign",
                      }}
                      className="dropdown-item text-white links"
                      onClick={this.handleClick}
                    >
                      PCB Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/OurServices/Ideation",
                        hash: "#services03",
                      }}
                      className="dropdown-item text-white links"
                      onClick={this.handleClick}
                    >
                      R&D
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/OurServices/IdustryVisit",
                        hash: "#services03",
                      }}
                      className="dropdown-item text-white links"
                      onClick={this.handleClick}
                    >
                      Industrial Panel
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item links">
                <Link
                  to="/careers"
                  className="nav-link text-white pr-5 px-md-3"
                  onClick={this.handleClick}
                >
                  Career
                </Link>
              </li>

              <li className="nav-item dropdown links">
                <Link
                  to=""
                  className="nav-link text-white dropdown-toggle pr-5 px-md-3"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul
                  className="dropdown-menu p-0 text-center pr-5 px-md-3"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      to="/Portfolio"
                      className="dropdown-item text-white links "
                      onClick={this.handleClick}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="dropdown-item text-white links"
                      onClick={this.handleClick}
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item links">
                <Link
                  to="/blogs"
                  className="nav-link text-white pr-5 px-md-3"
                  onClick={this.handleClick}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNav;

// const MainNav = () => {
//   return (

//   );
// };

// export default MainNav;
