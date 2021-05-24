import React, { Component } from "react";
import axios from "axios";
import formBg from "../Images/ideaSubmissionBg.png";
import "../Components/css/jobApplication.css";

class IdeaSubmission extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    const email_id = e.target.elements.emailid.value;
    const contact_no = e.target.elements.contact.value;
    const idea_content = e.target.elements.ideaContent.value;
    axios
      .post("https://api.oytechnology.com/ideas/", {
        name: name,
        email_id: email_id,
        contact_no: contact_no,
        idea_content: idea_content,
      })
      .then((res) => {
        alert(
          res.statusText === "Created"
            ? "Your Idea is Submitted. Please return to home page"
            : "Please, Try again later!!"
        );
        console.log(res);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  render() {
    return (
      <div className="formBg" style={{ backgroundImage: `url(${formBg})` }}>
        <form
          onSubmit={this.formSubmitHandler}
          name="ideaForm"
          id="ideaSubmission"
          className="d-md-flex flex-column align-items-center py-5"
        >
          <label className="p-2">
            <strong className="text-dark">Name</strong>:{" "}
            <input type="text" name="username" className="px-2" />
          </label>
          <label className="p-2">
            <strong className="text-dark">Email Id</strong>:{" "}
            <input type="email" name="emailid" className="px-2" />
          </label>
          <label className="p-2">
            <strong className="text-dark">Contact</strong>:{" "}
            <input type="text" name="contact" className="px-2" />
          </label>
          <label className="p-2">
            <div className="text-center">
              <strong className="text-dark">Idea</strong>:
            </div>
            <textarea
              name="ideaContent"
              cols={50}
              rows={4}
              className="px-2"
            ></textarea>
          </label>
          <button className="btn btn-primary my-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default IdeaSubmission;
