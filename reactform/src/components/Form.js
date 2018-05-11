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

  validatePW(event) {
    this.state.Password.length < 8
      ? this.setState({ PasswordError: "" })
      : this.setState({
          PasswordError: "Passord must be 8 characters or longer"
        });
  }

  validateNum(event) {
    const phoneNum = this.state.Phone;
    phoneNum.match(/\d/g).length === 11 && phoneNum.startsWith(0)
      ? this.setState({ PhoneError: "" })
      : this.setState({ PhoneError: "Please enter a valid phone number" });
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
        />
        <Field
          fieldName="Phone"
          handleInputChange={this.handleInputChange}
          errorText={this.state.PhoneError}
          onBlur={this.validateNum}
        />
        <Field
          fieldName="Username"
          handleInputChange={this.handleInputChange}
          errorText={this.state.UsernameError}
        />
        <Password
          fieldName="Password"
          handleInputChange={this.handleInputChange}
          validatePW={this.validatePW}
          errorText={this.state.PasswordError}
        />
        <Subscribe handleInputChange={this.handleInputChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
