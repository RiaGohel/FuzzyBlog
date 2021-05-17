import "../css/sign.css";
import { useState } from "react";

function Signup() {
  return (
    <div>
      <div class="user">
        <header class="user__header">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
            alt=""
          />
          <h1 class="user__title">Welcome! 😄</h1>
        </header>

        <form class="form">
          <div class="form__group">
            <input
              id="username"
              type="text"
              placeholder="Username"
              class="form__input"
            />
          </div>

          <div class="form__group">
            <input id="" type="email" placeholder="Email" class="form__input" />
          </div>

          <div class="form__group">
            <input type="password" placeholder="Password" class="form__input" />
          </div>

          <div class="form__group">
            <input
              type="password"
              placeholder="Confirm Password"
              class="form__input"
            />
          </div>

          <button class="btn" type="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
