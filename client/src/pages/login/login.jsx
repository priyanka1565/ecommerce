import React, { useState } from 'react'
import "./login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [forPassword, fortPassword] = useState("");
  let arr = [];
  const handleSubmit = (event) => {
   event.preventDefault();
    console.log(email, password);
    let user_info = {
      email: email,
      password: password
    }
    arr.push(user_info);
    //console.log(arr,"arr")
    
  }

  return (
    <div className="box">
      <span className="bordreLine"></span>
      <form action="" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div className="inputBox">
          <input type="text"  onChange={(e)=>setEmail(e.target.value)}/>
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="./signup.html">Signup</a>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login