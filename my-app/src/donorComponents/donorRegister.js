import React from "react";
import { Link } from "react-router-dom";

class donorRegister extends React.Component {
  render() {
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
                action="/donorRegister"
                method="post"
                id="hideform"
              >
                <div className="input-group">
                  <input
                    type="text"
                    id="email"
                    name="loginEmail"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    id="password"
                    name="loginPassword"
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
              action="/signup"
              method="post"
              id="hideform"
            >
              <div className="input-group">
                <input
                  type="text"
                  id="fullName"
                  name="userFullName"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="email"
                  name="userEmail"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="gender"
                  name="userGender"
                  className="form-control"
                  placeholder="Gender"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="age"
                  name="userAge"
                  className="form-control"
                  placeholder="Age"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="city"
                  name="userCity"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="password"
                  name="userPassword"
                  className="form-control"
                  placeholder="Password"
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
