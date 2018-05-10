import React from "react";

export class Password extends React.Component {
  render() {
    return (
      <div>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password
          <input type="password" name="confirmPassword" />
        </label>
      </div>
    );
  }
}
