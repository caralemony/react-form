import React from "react";

export class Field extends React.Component {
  render() {
    return (
      <label>
        {this.props.fieldName}
        <input
          type="text"
          name={this.props.fieldName}
          onChange={this.props.handleInputChange}
        />
        <div>{this.props.errorText}</div>
      </label>
    );
  }
}
