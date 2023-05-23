import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="align">
    <div className="container"> 
      <h2>Register</h2>
      <form action="/action_page.php">
        <div className="container">
          <hr /><label htmlFor="nm"><b>Name</b></label>
          <input type="text" placeholder="Enter Full Name" name="nm" id="nm" required />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email/Username" name="email" id="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

          <label htmlFor="age"><b>Age</b></label>
          <input type="text" placeholder="Enter Age" name="age" id="age" required />
          <hr />
          <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
          <button type="submit" className="registerbtn">Register</button>
        </div>
      </form>
      <div className="sign-up">
        <p>Already have an account? <a href="/Login">Sign in</a>.</p>
      </div>
    </div>
    </div>
  );
};

export default Register;
