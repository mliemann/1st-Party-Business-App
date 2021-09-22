import React from "react";
import "./contact.css"

function Contact() {
    return (
        <div class="container" >
          
  <form id="formcontact" action="action_page.php">
    <div>
      <h2 id="contact">contact us:</h2>
    </div>

    <label className="title" for="fname">first name</label>
    <input className="input" type="text" id="fname" name="firstname" placeholder="    your name.."></input>

    <label className="title" for="lname">last name</label>
    <input className="input" type="text" id="lname" name="lastname" placeholder="    your last name.."></input>

    <label className="title" for="lname">email</label>
    <input className="input" type="text" id="lname" name="lastname" placeholder="    your email.."></input>

    <label className="title" for="subject">subject</label>
    <textarea className="input" id="subject" name="subject" placeholder="                                               write something.." style={{height: "200px"}}></textarea>

    <input className="btnlogin" type="submit" value="submit"></input>

  </form>
</div>
    )
}

export default Contact;