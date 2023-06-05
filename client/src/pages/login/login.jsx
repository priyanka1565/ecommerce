import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  // const [forPassword, fortPassword] = useState("");

  //form validation 
     
   
 
  let arr = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      toast("Please Enter valid email");
    }
    if (!password) {
      toast("Please Enter valid password ");
    }
    console.log(email, password);
    let user_info = {
      email: email,
      password: password
    }
    arr.push(user_info);
    console.log(arr, "arr")
    
  }

  
 

  return (
    <div className="box">
      <span className="bordreLine"></span>
      <form action="" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div className="inputBox">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {formErrors.email && <div>{formErrors.email}</div>}
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="./signup.html">Signup</a>
        </div>
        <input type="submit" />
      </form>
      <ToastContainer/>
    </div>
  );
}

export default Login