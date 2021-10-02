import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function Footer() {
  const history = useHistory();

  const regRoute = () => {
    history.push("/signup");
  };

  const contactRoute = () => {
    history.push("/contact");
  };

  return (
    <footer className="footer">
      <div id="whitespaceFooter">
      <h3 id="address">418 javascript blvd, processor, gb 11001</h3>
      
        <button className="btnfooter" onClick={contactRoute}>
          contact us
        </button>
        <button className="btnfooter" onClick={regRoute}>
          register
        </button>
        <h3 id="copyright">© 2021 the best group, llc</h3>
      </div>
      
    </footer>
  );
}

export default Footer;
