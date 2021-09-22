import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function Footer() {

  const history = useHistory();

  const regRoute = () => {
      history.push("/signup");
  }

  const contactRoute = () => {
    history.push("/contact");
}



  return (
    <footer className="footer">
      <h3 id="address">418 address blvd processor, gb 11001</h3>
      <div id="whitespace">
      <button className="btn" onClick={contactRoute}>Contact Us</button>
      <button className="btn" onClick={regRoute}>Register</button>
    </div>
    </footer>
  );
}

export default Footer;