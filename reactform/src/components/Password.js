import React from "react";
import ReactDOM from "react-dom";

export class Password extends React.Component {
  render() {
    return (
      <div>
        <label>
          Password
          <input type="password" name="password" value={this.props.password} />
        </label>
        <label>
          Confirm Password
          <input type="password" name="confirmPassword" />
        </label>
      </div>
    );
  }
}
