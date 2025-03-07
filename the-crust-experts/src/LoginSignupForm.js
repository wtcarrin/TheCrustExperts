import React, { useState } from "react";
import "./style.css";

const LoginSignupForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);

  return (
    <section className={`wrapper ${isLoginActive ? "active" : ""}`}>
      <div className="form signup">
        <header onClick={() => setIsLoginActive(false)}>Signup</header>
        <form action="#">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>
      <div className="form login">
        <header onClick={() => setIsLoginActive(true)}>Login</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};

export default LoginSignupForm;
