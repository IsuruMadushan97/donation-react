import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DonorProfile from "./donorProfile";

class donorRegister extends React.Component {
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
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
      console.log("1:" + postString);
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
      let isCorrectPassword = result.data;
      if (isCorrectPassword) {
        console.log("Correct");
        DonorProfile.setEm(loginEmail);
        DonorProfile.authenticate();
        setTimeout(() => {
          this.props.history.push("/loggedInDonor");
        }, 200);
      } else {
        console.log("Not Correct");
        DonorProfile.signout();
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
              <br />These are some words that encourage people to donate
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
          </div>

          <div id="regBox">
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

export default donorRegister;
