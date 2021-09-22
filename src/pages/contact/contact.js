import React from "react";
import "./contact.css"

function Contact() {
    return (
        <div class="container" >
          
  <form id="formcontact" action="action_page.php">
    <div>
      <h2 id="contact">Contact Us:</h2>
    </div>

    <label className="title" for="fname">First Name</label>
    <input className="input" type="text" id="fname" name="firstname" placeholder="    Your name.."></input>

    <label className="title" for="lname">Last Name</label>
    <input className="input" type="text" id="lname" name="lastname" placeholder="    Your last name.."></input>

    <label className="title" for="lname">Email</label>
    <input className="input" type="text" id="lname" name="lastname" placeholder="    Your email.."></input>

    <label className="title" for="subject">Subject</label>
    <textarea className="input" id="subject" name="subject" placeholder="    Write something.." style={{height: "200px"}}></textarea>

    <input className="btnlogin" type="submit" value="Submit"></input>

  </form>
</div>
    )
}

export default Contact;