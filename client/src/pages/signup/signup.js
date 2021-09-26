import React from "react";
// import API from "../../../server/utils/API";
import "./signup.css";

function Signup() {

  // Setting our component's initial state
  // const [users, setUser] = useState([])
  // const [formObject, setFormObject] = useState({})

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.getElementById("name-signup").value.trim();
    const email = document.getElementById("email-signup").value.trim();
    const password = document.getElementById("password-signup").value.trim();

    const userInfo = {
      name: user_name,
      email: email,
      password: password
    };

    console.log(userInfo)
  
    if (user_name && email && password) {
      const response = await fetch("http://localhost:3001/api/user", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // document
  //   .querySelector(".signup-form")
  //   .addEventListener("submit", signupFormHandler)

  // function loadUser(){
  //   API.getUser
  //   .then(res => 
  //     setUser(res.data)
  //   )
  //   .catch(err => console.log(err));
  // }
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }

  return (

    <div id="formsignup">

        <div>
          <h2 id="signup">sign up</h2>
        </div>

     
      <form>

        <div>
          <input type="text" className="input" id="name-signup" placeholder="    enter name" />
        </div>

        <div>
          <input type="text" className="input" id="email-signup" placeholder="    enter email" />
        </div>

        <div>
          <input
            className="input"
            type="password"
            id="password-signup"
            placeholder="    create password"
          />
        </div>

        <div>
          <button className="btnlogin" type="submit" onClick={signupFormHandler}>sign up</button>
        </div>

      </form>


    </div>
  );
}

export default Signup;
