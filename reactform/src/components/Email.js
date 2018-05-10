import React from "react";

export class Email extends React.Component {
  render() {
    return (
      <div>
        <label>
          Phone
          <input
            type="text"
            name="email"
            onChange={this.props.handleInputChange}
          />
        </label>
      </div>
    );
  }
}
