import React from "react";
import ReactDOM from "react-dom";
import { Password } from "./Password";
import { Field } from "./Field";
import { Subscribe } from "./Subscribe";
import httpReq from "../utils/httpReq";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      EmailError: "",
      Phone: "",
      PhoneError: "",
      Username: "",
      UsernameError: "",
      Password: "",
      PasswordError: "",
      Subscribe: false
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
    console.log(this.state);
  }

  render() {
    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <Field
          fieldName="Email"
          handleInputChange={this.handleInputChange}
          errorText={this.EmailError}
        />
        <Field
          fieldName="Phone"
          handleInputChange={this.handleInputChange}
          errorText={this.PhoneError}
        />
        <Field
          fieldName="Username"
          handleInputChange={this.handleInputChange}
          errorText={this.UsernameError}
        />
        <Password
          fieldName="Password"
          handleInputChange={this.handleInputChange}
          errorText={this.PasswordError}
        />
        <Subscribe handleInputChange={this.handleInputChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
