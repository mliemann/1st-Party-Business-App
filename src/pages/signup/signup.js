import React from "react";
// import API from "../../../server/utils/API";
import "./signup.css";

function Signup() {

  // Setting our component's initial state
  // const [users, setUser] = useState([])
  // const [formObject, setFormObject] = useState({})

  // const signupFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const user_name = document.querySelector("#name-signup").value.trim();
  //   const email = document.querySelector("#email-signup").value.trim();
  //   const password = document.querySelector("#password-signup").value.trim();
  
  //   if (user_name && email && password) {
  //     const response = await fetch("/api/users", {
  //       method: "POST",
  //       body: JSON.stringify({ user_name, email, password }),
  //       headers: { "Content-Type": "application/json" },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace("/profile");
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }
  // };
  
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
    <div>
      <div>
        <div>
          <h2>Sign Up</h2>
        </div>
      </div>
      <form>
        <div>
          {/* <input onChange={handleInputChange} type="text" id="name-signup" placeholder="Enter name" /> */}
        </div>
        <div>
          {/* <input onChange={handleInputChange} type="text" id="email-signup" placeholder="Enter email" /> */}
        </div>
        <div>
          {/* <input
            onChange={handleInputChange}
            type="password"
            id="password-signup"
            placeholder="Create password"
          /> */}
        </div>
        <div>
          {/* <button onClick={handleFormSubmit} type="submit">Sign Up</button> */}
        </div>
      </form>
    </div>
  );
}

export default Signup;
