import React from 'react';
import './login.css';

const Login = () => {
  return (
<div class="split-screen">
  <div class="left">
    <section>
      <h2>LMS E-Learning</h2>
      <p>blah blah blah</p>
    </section>
  </div>
  <div class="right">
    <div class="login-container">
      <h2>Login</h2>
      <form action="/">
        <label for="username">Username / email</label>
        <input type="text" id="username" placeholder="Username / email" />
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <div class="sign-up">
        <span>Not registered yet? </span>
        <a href="/Register">Click here to sign up</a>
      </div>
    </div>
  </div>
</div>



  );
};

export default Login;
