import React from "react";

export class Password extends React.Component {
  render() {
    const error = this.props.errorText;
    return (
      <label>
        password
        <br />
        <input
          type="password"
          name={this.props.fieldName}
          onChange={this.props.handleInputChange}
          value={this.props.value}
        />
        <div>{error ? error : <br />}</div>
      </label>
    );
  }
}
