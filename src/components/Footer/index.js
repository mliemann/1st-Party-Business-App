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
      <h3>418 address blvd processor, gb 11001</h3>
      <button onClick={contactRoute}>Contact Us</button>
      <button onClick={regRoute}>Register</button>
    </footer>
  );
}

export default Footer;