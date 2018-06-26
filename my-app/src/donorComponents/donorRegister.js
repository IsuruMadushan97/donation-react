import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DonorProfile from "./donorProfile";
import PropTypes from "prop-types";

class donorRegister extends React.Component {
  constructor() {
    super();
    this.getContent = this.getContent.bind(this);
  }

  state = {
    name: "",
    email: "",
    gender: "",
    age: "",
    city: "",
    password: "",

    loginEmail: "",
    loginPassword: ""
  };
  getContent(event) {
    this.props.callback(event);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, gender, age, city, password } = this.state;

    var postString =
      "http://localhost:8000/donors?email=" +
      email +
      "&name=" +
      name +
      "&gender=" +
      gender +
      "&age=" +
      age +
      "&city=" +
      city +
      "&password=" +
      password;
    axios.post(postString, {}).then(result => {
      if (result.data) {
        this.setState({ loginEmail: email, loginPassword: password });
        this.onLogin(e);
      } else {
        let donorRegisterAlert = document.getElementById("donorRegisterAlert");
        donorRegisterAlert.style = "display:block";
      }
    });
  };

  onLogin = e => {
    e.preventDefault();
    const { loginEmail, loginPassword } = this.state;

    var postString =
      "http://localhost:8000/donorspass/" +
      loginEmail +
      "?password=" +
      loginPassword;
    axios.get(postString, {}).then(result => {
      if (result.data !== "false") {
        console.log("HERE999:  ", result.data.id);
        DonorProfile.setToken(result.data.token);

        this.getContent(result.data.id);
        setTimeout(() => {
          this.props.history.push("/loggedInDonor");
        }, 500);
      } else {
        let donorLoginAlert = document.getElementById("donorLoginAlert");
        donorLoginAlert.style = "display:block";
      }
    });
  };

  render() {
    const {
      name,
      email,
      gender,
      age,
      city,
      password,

      loginEmail,
      loginPassword
    } = this.state;
    return (
      <div>
        <header>Donors Site</header>
        <div id="fullBox">
          <div id="about">
            <h2>Thanks For Your Donation!</h2>
            <Link to="/hospitalRegister" className={"text-danger"}>
              A Hospital?
            </Link>
            <div id="wholeLogin">
              <div
                className="alert alert-warning"
                id="donorLoginAlert"
                role="alert"
              >
                Email and password does not match!
              </div>
              <h5>Login:</h5>
              <form className="form-signin" onSubmit={this.onLogin}>
                <div className="input-group">
                  <input
                    type="text"
                    name="loginEmail"
                    value={loginEmail}
                    className="form-control"
                    placeholder="Email"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    name="loginPassword"
                    value={loginPassword}
                    className="form-control"
                    placeholder="Password"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-lg btn-outline-light btn-block form-control"
                    name="add"
                  />
                </div>
              </form>
            </div>
          </div>

          <div id="regBox">
            <div
              className="alert alert-warning"
              id="donorRegisterAlert"
              role="alert"
            >
              The Email is already registered!
            </div>
            <h5>Register:</h5>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  placeholder="Full Name"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="email"
                  value={email}
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  className="form-control"
                  placeholder="Gender"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="number"
                  name="age"
                  value={age}
                  className="form-control"
                  placeholder="Age"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="city"
                  value={city}
                  className="form-control"
                  placeholder="City"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
              </div>
              All fields are required
              <div className="input-group">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-lg btn-outline-dark btn-block form-control"
                  name="add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
donorRegister.protoTypes = {
  callback: PropTypes.func
};

export default donorRegister;
