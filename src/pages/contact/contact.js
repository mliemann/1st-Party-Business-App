import React from "react";
import "./contact.css"

function Contact() {
    return (
        <div class="container">
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="lname">Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Your email.."></input>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

    <input type="submit" value="Submit"></input>

  </form>
</div>
    )
}

export default Contact;