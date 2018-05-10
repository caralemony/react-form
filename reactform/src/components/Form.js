import React from "react";
import ReactDOM from "react-dom";
import { Password } from "./Password";
import httpReq from "../utils/httpReq";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      username: "",
      password: "",
      subscribe: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    httpReq(this.state);
  }

  render() {
    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" name="email" onChange={this.handleInputChange} />
        </label>
        <label>
          Phone
          <input type="text" name="phone" onChange={this.handleInputChange} />
        </label>
        <label>
          Username
          <input
            type="text"
            name="username"
            onChange={this.handleInputChange}
          />
        </label>
        <Password
          password={this.state.password}
          onChange={this.handleInputChange}
        />
        <label>
          I would like to receive emails about our services
          <input
            type="checkbox"
            name="subscribe"
            onChange={this.handleInputChange}
            value={this.state.subscribe}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
