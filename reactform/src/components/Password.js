import React from "react";

export class Password extends React.Component {
  constructor(props) {
    super(props);
    this.validatePW = this.validatePW.bind(this);
  }
  validatePW(event) {
    return event.target.value.length > 8
      ? (this.props.PasswordError = "Password must be 8 characters or longer")
      : "";
  }

  render() {
    return (
      <label>
        Password
        <input
          type="password"
          name={this.props.fieldName}
          onChange={this.props.handleInputChange}
        />
        <div>{this.props.errorText}</div>
      </label>
    );
  }
}
