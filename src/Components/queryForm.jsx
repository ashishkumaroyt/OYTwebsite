import React from "react";
import "./css/form.css";
import axios from "axios";

function QueryForm() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const contact = e.target.elements.contact.value;
    const query = e.target.elements.query.value;
    axios
      .post("https://api.oytechnology.com/query/", {
        name: name,
        contact: contact,
        query: query,
      })
      .then((res) => {
        alert(
          res.statusText === "Created"
            ? "Your query is Submitted. We will soon revert back to you."
            : "Please, Try again later!!"
        );
        console.log(res);
      })
      .catch((err) => {
        alert("Your Query not Submitted. Please Try again!!" + err);
        console.log(err);
      });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="m-1 px-2 py-1"
        />
      </div>
      <div>
        <input
          type="text"
          name="contact"
          placeholder="Your Contact No."
          className="m-1 px-2 py-1"
        />
      </div>
      <div>
        <input
          type="text"
          name="query"
          placeholder="Your Query"
          className="m-1 px-2 py-1"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="m-2 px-2 bg-primary text-white"
      />
    </form>
  );
}

export default QueryForm;
