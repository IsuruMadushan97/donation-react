import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class donorRegister extends React.Component {
  state = {
    name: "",
    email: "",
    gender: "",
    age: "",
    city: "",
    password: ""
  };

  onChange = e => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { name, email, gender, age, city, password } = this.state;

    // const { name, email, gender, age, city, password } = this.state;
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

  render() {
    const { name, email, gender, age, city, password } = this.state;
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
              <form
                className="form-signin"
                onSubmit={this.handleSubmit}
                id="hideform"
              >
                <div className="input-group">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-lg btn-light btn-block form-control"
                    name="add"
                    id="myClick"
                  />
                </div>
              </form>
            </div>
          </div>

          <div id="regBox">
            <h5>Register:</h5>
            <form
              className="form-signin"
              onSubmit={this.onSubmit}
              id="hideform"
            >
              <div className="input-group">
                <input
                  type="text"
                  id="name"
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
                  id="email"
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
                  id="gender"
                  name="gender"
                  value={gender}
                  className="form-control"
                  placeholder="Gender"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="age"
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
                  id="city"
                  name="city"
                  value={city}
                  className="form-control"
                  placeholder="City"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="password"
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
                  id="myClick"
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
