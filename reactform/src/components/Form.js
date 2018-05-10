import React from "react";
import ReactDOM from "react-dom";
import { Password } from "./Password";
import { httpReq } from "../utils/httpReq";

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
  }

  handleSubmit() {
    httpReq(this.state);
  }

  render() {
    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" name="email" value={this.state.email} />
        </label>
        <label>
          Phone
          <input type="text" name="phone" value={this.state.phone} />
        </label>
        <label>
          Username
          <input type="text" name="username" value={this.state.username} />
        </label>
        <Password password={this.state.password} />
        <label>
          I would like to receive emails about our services
          <input
            type="checkbox"
            label="subscribe"
            value={this.state.subscribe}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
