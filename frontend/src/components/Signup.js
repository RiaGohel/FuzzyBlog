import "../css/sign.css";
import { useState } from "react";

function Signup() {
  return (
    <div>
      <div className="user">
        <header className="user__header">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
            alt=""
          />
          <h1 className="user__title">Welcome! 😄</h1>
        </header>

        <form className="form">
          <div className="form__group">
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="form__input"
            />
          </div>

          <div className="form__group">
            <input
              id=""
              type="email"
              placeholder="Email"
              className="form__input"
            />
          </div>

          <div className="form__group">
            <input
              type="password"
              placeholder="Password"
              className="form__input"
            />
          </div>

          <div className="form__group">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form__input"
            />
          </div>

          <button className="btn" type="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
