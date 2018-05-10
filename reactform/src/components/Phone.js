import React from "react";

export class Phone extends React.Component {
  render() {
    return (
      <div>
        <label>
          Phone
          <input
            type="text"
            name="phone"
            onChange={this.props.handleInputChange}
          />
        </label>
      </div>
    );
  }
}
