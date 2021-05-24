import React, { Component } from "react";
import axios from "axios";
import formBgImg from "../Images/jobApplicationBg.png";
import "./css/jobApplication.css";

class JobApplicationForm extends Component {
  state = {};

  formSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const contact = e.target.elements.contact.value;
    const emailId = e.target.elements.emailId.value;
    const position = e.target.elements.position.value;
    const experience = e.target.elements.experience.value;
    const resume_cv = e.target[5].files[0];
    console.log(e.target[5].files[0]);
    let form_data = new FormData();
    form_data.append("name", name);
    form_data.append("contact", contact);
    form_data.append("emailId", emailId);
    form_data.append("position", position);
    form_data.append("experience", experience);
    form_data.append("resume_cv", resume_cv);

    axios
      .post("https://api.oytechnology.com/jobApply/", form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(
          res.statusText === "Created"
            ? "Your Application is submitted successfully. Please wait for our response"
            : "Please, Try again later!!"
        );
        console.log(res);
      })
      .catch((err) => {
        alert("Your application not Submitted. Please Try again!!" + err);
        console.log(err);
      });
  };
  render() {
    return (
      <div className="formBg" style={{ backgroundImage: `url(${formBgImg})` }}>
        <form
          className="d-flex flex-column align-items-center p-5 job-form"
          onSubmit={this.formSubmitHandler}
        >
          <label>
            <strong>Name:</strong>
            <input
              className="mx-2 py-1 px-2"
              type="text"
              name="name"
              placeholder="Your Name"
              style={{ width: "25vw" }}
            />
          </label>
          <label>
            <strong>Email Id:</strong>
            <input
              className="mx-2 py-1 px-2"
              type="email"
              name="emailId"
              placeholder="Your Email Address"
              style={{ width: "25vw" }}
            />
          </label>
          <label>
            <strong>Contact:</strong>
            <input
              className="mx-2 py-1 px-2"
              type="text"
              name="contact"
              placeholder="Mobile Number"
              style={{ width: "25vw" }}
            />
          </label>
          <label>
            <strong>Position:</strong>
            <input
              className="mx-2 py-1 px-2"
              type="text"
              name="position"
              value={this.props.location.state}
              style={{ width: "25vw" }}
            />
          </label>
          <label>
            <strong>Experience:</strong>
            <input
              type="number"
              name="experience"
              className="mx-2 py-1 px-2"
              step="0.1"
              min="0"
              style={{ width: "25vw" }}
            />
          </label>
          <label>
            <strong>Attach your Resume/Cv :</strong>
            <input
              type="file"
              name="resume_cv"
              className="mx-2 py-1 px-2"
              style={{ width: "25vw" }}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </form>
      </div>
    );
  }
}

export default JobApplicationForm;
