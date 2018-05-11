import React from "react";

export class Password extends React.Component {
  render() {
    return (
      <label>
        Password
        <input
          type="password"
          name={this.props.fieldName}
          onChange={this.props.handleInputChange}
          onBlur={this.props.validatePW}
        />
        <div>{this.props.errorText}</div>
      </label>
    );
  }
}
