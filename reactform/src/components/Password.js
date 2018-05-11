import React from "react";

export class Password extends React.Component {
  render() {
    const error = this.props.errorText;
    return (
      <label>
        Password
        <br />
        <input
          type="password"
          name={this.props.fieldName}
          onChange={this.props.handleInputChange}
          onBlur={this.props.validatePW}
        />
        <div>{error ? error : <br />}</div>
      </label>
    );
  }
}
