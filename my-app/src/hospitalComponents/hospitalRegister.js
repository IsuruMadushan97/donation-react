import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HospitalProfile from "./hospitalProfile";

class hospitalRegister extends React.Component {
  state = {
    name: "",
    email: "",
    city: "",
    password: "",

    loginEmail: "",
    loginPassword: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    console.log("On s");

    e.preventDefault();
    const { name, email, city, password } = this.state;

    var postString =
      "http://localhost:8000/hospitals?email=" +
      email +
      "&name=" +
      name +
      "&city=" +
      city +
      "&password=" +
      password;
    axios.post(postString, {}).then(result => {
      console.log("1:" + postString);
    });
  };

  onLogin = e => {
    e.preventDefault();
    const { loginEmail, loginPassword } = this.state;

    var postString =
      "http://localhost:8000/hospitalspass/" +
      loginEmail +
      "?password=" +
      loginPassword;
    axios.get(postString, {}).then(result => {
      let isCorrectPassword = result.data;
      if (isCorrectPassword) {
        console.log("Correct");
        HospitalProfile.setEm(loginEmail);
        HospitalProfile.authenticate();
        setTimeout(() => {
          this.props.history.push("/loggedInHospital");
        }, 200);
      } else {
        console.log("Not Correct");
        HospitalProfile.signout();
      }
    });
  };

  render() {
    const {
      name,
      email,
      city,
      password,
      loginEmail,
      loginPassword
    } = this.state;
    return (
      <div>
        <header>Hospitals Site</header>
        <div id="fullBox">
          <div id="about">
            <div id="HosLogTitle">
              <h5>Hospitals Login:</h5>
            </div>
            <Link to="/" className={"text-danger"}>
              A donor?
            </Link>
            <form className="form-signin" onSubmit={this.onLogin}>
              <div className="input-group">
                <input
                  type="text"
                  name="loginEmail"
                  value={loginEmail}
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onChange}
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
                />
              </div>
              <div className="input-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-lg btn-light btn-block form-control"
                  name="add"
                />
              </div>
            </form>
          </div>
          <div id="regBox">
            <h5>Hospitals Registration:</h5>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  placeholder="Hospital Full Name"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="email"
                  value={email}
                  className="form-control"
                  placeholder="Admin Email"
                  onChange={this.onChange}
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
                />
              </div>
              <div className="input-group">
                <input
                  type="submit"
                  value="Confirm"
                  className="btn btn-lg btn-light btn-block form-control"
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

export default hospitalRegister;
