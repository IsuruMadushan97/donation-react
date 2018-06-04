import React from "react";
import { Link } from "react-router-dom";

class hospitalRegister extends React.Component {
  render() {
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
            <form
              className="form-signin"
              action="index.html"
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
          <div id="regBox">
            <h5>Hospitals Registration:</h5>
            <form
              className="form-signin"
              action="index.html"
              method="post"
              id="hideform"
            />
            <div className="input-group">
              <input
                type="text"
                id="fullName"
                name="hospitalFullName"
                className="form-control"
                placeholder="Hospital Full Name"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="email"
                name="hospitalEmail"
                className="form-control"
                placeholder="Admin Email"
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
          </div>
        </div>
      </div>
    );
  }
}

export default hospitalRegister;
