import React from "react";
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
      Subscribe: false,
      formMes: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleInputChange(event) {
    console.log(this.state);
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
      EmailError: "",
      PhoneError: "",
      UsernameError: "",
      PasswordError: ""
    };

    const userEmail = this.state.Email;
    const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phoneNum = this.state.Phone;

    if (this.state.Username.length < 6) {
      isError = true;
      errors.UsernameError = "Username needs to be at least 6 characters long";
    }
    if (!regEx.test(userEmail)) {
      isError = true;
      errors.EmailError = "Requires valid email";
    }
    if (this.state.Password.length < 6) {
      isError = true;
      errors.PasswordError = "Password needs to be at least 8 characters long";
    }
    if (
      !phoneNum.match(/\d/g) &&
      phoneNum.length !== 11 &&
      !phoneNum.startsWith(0)
    ) {
      isError = true;
      errors.PhoneError = "Please enter a valid phone number";
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
        Email: "",
        EmailError: "",
        Phone: "",
        PhoneError: "",
        Username: "",
        UsernameError: "",
        Password: "",
        PasswordError: "",
        Subscribe: false,
        formMes: "Thank you for signing up"
      });
    } else {
      console.log("bad");
      this.setState({ formMes: "Please complete all fields" });
    }
  }

  render() {
    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <Field
          fieldName="Email"
          handleInputChange={this.handleInputChange}
          errorText={this.state.EmailError}
        />
        <Field
          fieldName="Phone"
          handleInputChange={this.handleInputChange}
          errorText={this.state.PhoneError}
        />
        <Field
          fieldName="Username"
          handleInputChange={this.handleInputChange}
          errorText={this.state.UsernameError}
        />
        <Password
          fieldName="Password"
          handleInputChange={this.handleInputChange}
          errorText={this.state.PasswordError}
        />
        <Subscribe handleInputChange={this.handleInputChange} />
        <input type="submit" value="Submit" />
        <div>{this.formMes}</div>
      </form>
    );
  }
}
