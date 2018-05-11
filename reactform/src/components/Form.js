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
    console.log(this.state);
  }

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
      this.state.Phone.match(/\d/g).length === 11 &&
      this.state.Phone.startsWith(0)
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
      Subscribe: false
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
        <div>{this.formError}</div>
      </form>
    );
  }
}
