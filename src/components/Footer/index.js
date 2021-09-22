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
      <h3 id="address">418 javascript blvd, processor, gb 11001</h3>
      <div id="whitespace">
      <button className="btn" onClick={contactRoute}>contact us</button>
      <button className="btn" onClick={regRoute}>register</button>
    </div>
    </footer>
  );
}

export default Footer;