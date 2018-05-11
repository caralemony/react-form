import React from "react";
import { Password } from "./Password";
import { Field } from "./Field";
import { Subscribe } from "./Subscribe";
import httpReq from "../utils/httpReq";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      phone: "",
      phoneError: "",
      username: "",
      usernameError: "",
      password: "",
      passwordError: "",
      subscribe: false,
      formMes: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      phoneError: "",
      usernameError: "",
      passwordError: ""
    };

    const userEmail = this.state.email;
    const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phoneNum = this.state.phone;

    if (this.state.username.length < 6 || this.state.username.includes(" ")) {
      isError = true;
      errors.usernameError =
        "Username needs to be at least 6 characters long and must not contain spaces";
    }
    if (!regEx.test(userEmail)) {
      isError = true;
      errors.emailError = "Requires valid email";
    }
    if (this.state.password.length < 6) {
      isError = true;
      errors.passwordError = "Password needs to be at least 8 characters long";
    }
    if (phoneNum.match(/\[A-z]/g) || phoneNum.length !== 11) {
      isError = true;
      errors.phoneError = "Please enter a valid phone number";
    }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  handleSubmit(event) {
    event.preventDefault();
    const err = this.validate();

    if (!err) {
      httpReq(this.state);
      this.setState({
        email: "",
        emailError: "",
        phone: "",
        phoneError: "",
        username: "",
        usernameError: "",
        password: "",
        passwordError: "",
        subscribe: false,
        formMes: "Thank you for signing up"
      });
    } else {
      this.setState({ formMes: "Please complete all fields" });
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1 className="form__Title">Sign Up</h1>
        <Field
          fieldName="email"
          handleInputChange={this.handleInputChange}
          errorText={this.state.emailError}
          value={this.state.email}
        />
        <Field
          fieldName="phone"
          handleInputChange={this.handleInputChange}
          errorText={this.state.phoneError}
          value={this.state.phone}
        />
        <Field
          fieldName="username"
          handleInputChange={this.handleInputChange}
          errorText={this.state.usernameError}
          value={this.state.username}
        />
        <Password
          fieldName="password"
          handleInputChange={this.handleInputChange}
          errorText={this.state.passwordError}
          value={this.state.password}
        />
        <Subscribe handleInputChange={this.handleInputChange} />
        <input type="submit" value="Submit" />
        <p>{this.state.formMes}</p>
      </form>
    );
  }
}
