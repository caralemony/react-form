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
    this.validatePW = this.validatePW.bind(this);
    this.validateNum = this.validateNum.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
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
      EmailError: "",
      PhoneError: "",
      usernameError: "",
      passwordError: ""
    };

    const userEmail = this.state.Email;
    const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phoneNum = this.state.Phone;

    if (this.state.Username.length < 6) {
      isError = true;
      errors.usernameError = "Username needs to be at least 6 characters long";
    }

    if (regEx.test(userEmail)) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    if (this.state.Password.length < 6) {
      isError = true;
      errors.usernameError = "Password needs to be at least 8 characters long";
    }

    if (
      phoneNum.match(/\d/g) &&
      phoneNum.length === 11 &&
      phoneNum.startsWith(0)
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

  validatePW() {
    if (this.state.Password) {
      this.state.Password.length > 8
        ? this.setState({ PasswordError: "" })
        : this.setState({
            PasswordError: "Passord must be 8 characters or longer"
          });
    }
  }

  validateNum() {
    if (this.state.Phone) {
      const phoneNum = this.state.Phone;
      phoneNum.match(/\d/g) && phoneNum.length === 11 && phoneNum.startsWith(0)
        ? this.setState({ PhoneError: "" })
        : this.setState({ PhoneError: "Please enter a valid phone number" });
    }
  }

  validateEmail() {
    if (this.state.Email) {
      const userEmail = this.state.Email;
      const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      regEx.test(userEmail)
        ? this.setState({ EmailError: "" })
        : this.setState({ EmailError: "Please enter a valid email address" });
    }
  }

  validateUsername() {
    if (this.state.Username) {
      this.state.Username.length > 6
        ? this.setState({ UsernameError: "" })
        : this.setState({
            UsernameError: "Username must be 6 characters or longer"
          });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validatePW();
    this.validateNum();
    this.validateEmail();
    this.validateUsername();

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
  }

  render() {
    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <Field
          fieldName="Email"
          handleInputChange={this.handleInputChange}
          errorText={this.state.EmailError}
          validate={this.validateEmail}
        />
        <Field
          fieldName="Phone"
          handleInputChange={this.handleInputChange}
          errorText={this.state.PhoneError}
          validate={this.validateNum}
        />
        <Field
          fieldName="Username"
          handleInputChange={this.handleInputChange}
          errorText={this.state.UsernameError}
          validate={this.validateUsername}
        />
        <Password
          fieldName="Password"
          handleInputChange={this.handleInputChange}
          validatePW={this.validatePW}
          errorText={this.state.PasswordError}
        />
        <Subscribe handleInputChange={this.handleInputChange} />
        <input type="submit" value="Submit" />
        <div>{this.formMes}</div>
      </form>
    );
  }
}
