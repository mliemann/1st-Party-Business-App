import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="containercontact">
      <form id="formcontact" action="mailto:burnsgirlphotos@gmail.com" method="post" enctype="text/plain">
        <div>
          <h2 id="contact">contact us</h2>
        </div>

        <label className="title" htmlFor="fname">
          first name
        </label>
        <input
          className="inputContact"
          type="text"
          id="fname"
          name="firstname"
          placeholder="your name..."
        ></input>

        <label className="title" htmlFor="lname">
          last name
        </label>
        <input
          className="inputContact"
          type="text"
          id="lname"
          name="lastname"
          placeholder="your last name..."
        ></input>

        <label className="title" htmlFor="lname">
          email
        </label>
        <input
          className="inputContact"
          type="text"
          id="lname"
          name="lastname"
          placeholder="your email..."
        ></input>

        <label className="title" htmlFor="subject">
          subject
        </label>
        <textarea
          className="inputContact"
          id="subject"
          name="subject"
          placeholder="write something..."
          style={{ height: "200px" }}
        ></textarea>

        <input className="btnSend" type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Contact;
