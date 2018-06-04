import React from "react";
import { Link } from "react-router-dom";

class editHospitalAcct extends React.Component {
  render() {
    return (
      <div>
        <header>Hospitals Site</header>
        <div id="regBox2">
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
            <div className="input-group">
              <Link to="/loggedInHospital" className="btn-light form-control">
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

export default editHospitalAcct;
