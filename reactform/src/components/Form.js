import React from "react";
import ReactDOM from "react-dom";

export class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" name="email" />
        <label for="email">Email</label>
        <input type="number" name="phone" />
        <label for="phone">Phone</label>
        <input type="text" name="username" />
        <label for="email">Username</label>
        <input type="text" name="password" />
        <label for="email">Password</label>
        <input type="text" name="confirmPassword" />
        <label for="email">Confirm Password</label>
        <input type="checkbox" label="subscribe" />
        <label for="subscribe">
          I would like to receive emails about our services
        </label>
      </div>
    );
  }
}
