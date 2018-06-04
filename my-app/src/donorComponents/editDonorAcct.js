import React from "react";
import { Link } from "react-router-dom";

class editDonorAcct extends React.Component {
  render() {
    return (
      <div>
        <header>Donors Site</header>
        <div id="regBox">
          <h5>Edit My Account:</h5>
          <form
            className="form-signin"
            action="index.html"
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
            <div className="input-group">
              <Link to="/loggedInDonor" className="btn-light form-control">
                <input
                  type="button"
                  value="Cancel"
                  className="btn btn-lg btn-light"
                  name="cancel"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default editDonorAcct;
