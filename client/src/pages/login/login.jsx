import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div class="box">
      <span class="bordreLine"></span>
      <form action="" onsubmit="formData()">
        <h2>Sign in</h2>
        <div class="inputBox">
          <input type="text" id="email" />
          <span>Email</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="text" id="password" />
          <span>Password</span>
          <i></i>
        </div>
        <div class="links">
          <a href="#">Forgot Password</a>
          <a href="./signup.html">Signup</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login