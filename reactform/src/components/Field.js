import React from "react";

export class Field extends React.Component {
  render() {
    const error = this.props.errorText;
    return (
      <div>
        <label>
          {this.props.fieldName}
          <br />
          <input
            type="text"
            name={this.props.fieldName}
            value={this.props.value}
            onChange={this.props.handleInputChange}
          />
        </label>
        <div className="error">{error ? error : <br />}</div>
      </div>
    );
  }
}
