import React from "react";

export class Subscribe extends React.Component {
  render() {
    return (
      <label>
        I would like to receive emails about our services
        <input
          type="checkbox"
          name="Subscribe"
          onChange={this.props.handleInputChange}
          value={this.props.Subscribe}
        />
      </label>
    );
  }
}
