import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import DonorProfile from "./donorProfile";

class loggedInDonor extends React.Component {
  constructor() {
    super();
    this.state = {
      donations: [],
      type: "",
      notes: "",

      updateId: "",
      updateType: "",
      updateNotes: "",

      donorFullName: "",
      donorEmail: "",
      donorGender: "",
      donorAge: "",
      donorCity: "",
      donorPassword: "",

      theTable: [],

      count: 0,

      currentEmail: "",
      currentId: ""
    };
    this.componentWillMount();
  }

  async componentWillMount() {
    this.setState({ currentId: this.props.data });
    console.log(":::Here::: ", this.state.currentId);
    let x;
    await DonorProfile.getEm().then(function(value) {
      x = value;
    });
    this.setState({ currentEmail: x });
    console.log("The email", this.state.currentEmail);
    axios
      .get("http://localhost:8000/donations/" + this.state.currentEmail)
      .then(res => {
        const donations = res.data;

        if (donations != null) {
          this.setState({
            theTable: donations.map(donation => (
              <tr onClick={this.donationClicked.bind(this)} key={donation.id}>
                <th id="aa" scope="row">
                  {donation.id}
                </th>
                <td>{donation.type}</td>
                <td>{donation.notes}</td>
              </tr>
            ))
          });
        } else {
          this.setState({
            theTable: null
          });
        }
      });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let { type, notes } = this.state;
    let em = this.state.currentEmail;

    type = encodeURIComponent(type);
    notes = encodeURIComponent(notes);
    let em2 = encodeURIComponent(em);

    var postString =
      "http://localhost:8000/donations?type=" +
      type +
      "&notes=" +
      notes +
      "&donor_id=" +
      em2;

    axios.post(postString, {}).then(result => {
      this.componentWillMount();
    });
    this.setState({ type: "", notes: "" });
  };

  onSubmitUpdateDonation = e => {
    e.preventDefault();
    let id = this.state.updateId;
    let type = this.state.updateType;
    let notes = this.state.updateNotes;
    let em = this.state.currentEmail;

    id = encodeURIComponent(id);
    type = encodeURIComponent(type);
    notes = encodeURIComponent(notes);
    let em2 = encodeURIComponent(em);

    var postString =
      "http://localhost:8000/donations/" +
      id +
      "?type=" +
      type +
      "&notes=" +
      notes +
      "&donor_id=" +
      em2;
    axios.post(postString, {}).then(result => {
      this.componentWillMount();
    });
    this.cancel();
  };

  onSubmitUpdateDonor = e => {
    e.preventDefault();
    let donorFullName = this.state.donorFullName;
    let donorEmail = this.state.donorEmail;
    let donorGender = this.state.donorGender;
    let donorAge = this.state.donorAge;
    let donorCity = this.state.donorCity;
    let donorPassword = this.state.donorPassword;
    donorFullName = encodeURIComponent(donorFullName);
    donorGender = encodeURIComponent(donorGender);
    donorAge = encodeURIComponent(donorAge);
    donorCity = encodeURIComponent(donorCity);
    donorPassword = encodeURIComponent(donorPassword);
    let em = this.state.currentEmail;

    var postString =
      "http://localhost:8000/donors/" +
      em +
      "?email=" +
      donorEmail +
      "&name=" +
      donorFullName +
      "&gender=" +
      donorGender +
      "&age=" +
      donorAge +
      "&city=" +
      donorCity +
      "&password=" +
      donorPassword;
    axios.post(postString, {}).then(result => {
      this.componentWillMount();
    });
    this.cancel();
  };

  donationClicked(e) {
    let about = document.getElementById("about3");
    let about2 = document.getElementById("about2");
    about.style = "display:none";
    about2.style = "display:block";
    let id = e.target.parentElement.childNodes[0].innerText;
    let type = e.target.parentElement.childNodes[1].innerText;
    let notes = e.target.parentElement.childNodes[2].innerText;

    this.setState({ updateId: id, updateType: type, updateNotes: notes });
  }

  editAcct(e) {
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    body1.style = "display:none";
    body2.style = "display:block";
    let em = this.state.currentEmail;

    let getString = "http://localhost:8000/donors/" + em;
    axios.get(getString).then(res => {
      const donorInfo = res.data;
      console.log(donorInfo);
      this.setState({
        donorFullName: donorInfo.name,
        donorEmail: donorInfo.email,
        donorGender: donorInfo.gender,
        donorAge: donorInfo.age,
        donorCity: donorInfo.city,
        donorPassword: donorInfo.password
      });
    });
  }

  logout(e) {
    DonorProfile.signout();
    this.props.history.push("/");
  }

  cancel(e) {
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    body1.style = "display:block";
    body2.style = "display:none";

    let about = document.getElementById("about3");
    let about2 = document.getElementById("about2");
    about.style = "display:block";
    about2.style = "display:none";
  }

  delete(e) {
    let cancelBtn = document.getElementById("cancelBtn");
    let confirmBtn = document.getElementById("confirmBtn");
    let deleteBtn = document.getElementById("deleteBtn");

    cancelBtn.style = "display:block";
    confirmBtn.style = "display:block";
    deleteBtn.style = "display:none";
  }

  cancelDelete(e) {
    let cancelBtn = document.getElementById("cancelBtn");
    let confirmBtn = document.getElementById("confirmBtn");
    let deleteBtn = document.getElementById("deleteBtn");

    cancelBtn.style = "display:none";
    confirmBtn.style = "display:none";
    deleteBtn.style = "display:block";
  }

  confirmDelete(e) {
    let email = this.state.donorEmail;
    var postString = "http://localhost:8000/donors/" + email;

    axios.delete(postString, {}).then(result => {
      this.componentWillMount();
    });
    this.logout();
  }

  deleteDonation(e) {
    const id = this.state.updateId;
    var postString = "http://localhost:8000/donations/" + id;
    axios.delete(postString, {}).then(result => {
      this.componentWillMount();
    });
    this.cancel();
  }

  render() {
    return (
      <div>
        <div id="body1">
          <header>Donors Site</header>

          <div id="fullBox2">
            <div id="main">
              <h2>Welcome Ibrahim!</h2>

              <h6>Click on a donation to edit:</h6>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Type</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>{this.state.theTable}</tbody>
              </table>
            </div>
            <div id="right">
              <div id="divideBtns">
                <input
                  type="button"
                  value="Edit my account"
                  className="btn btn-outline-dark btn-block form-control halfBtn"
                  onClick={this.editAcct.bind(this)}
                />
                <input
                  type="button"
                  value="Logout"
                  className="btn btn-outline-dark btn-block form-control halfBtn"
                  onClick={this.logout.bind(this)}
                />
              </div>

              <div id="about3">
                <h5>Add Donation:</h5>
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      name="type"
                      value={this.state.type}
                      className="form-control"
                      placeholder="Donation Type"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="notes"
                      value={this.state.notes}
                      className="form-control"
                      placeholder="Notes, Such as blood type"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="submit"
                      value="Add"
                      className="btn btn-lg btn-light btn-block form-control"
                      name="add"
                    />
                  </div>
                </form>
              </div>
              <div id="about2">
                <h5>ID: {this.state.updateId}</h5>
                <form
                  className="form-signin"
                  onSubmit={this.onSubmitUpdateDonation}
                >
                  <div className="input-group">
                    <input
                      type="text"
                      name="updateType"
                      value={this.state.updateType}
                      className="form-control"
                      placeholder="Donation Type"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="updateNotes"
                      value={this.state.updateNotes}
                      className="form-control"
                      placeholder="Notes, Such as blood type"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="submit"
                      value="Edit"
                      className="btn btn-lg btn-light btn-block form-control"
                      name="edit"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="button"
                      value="Cancel"
                      className="btn btn-lg btn-light btn-block form-control"
                      name="cancel"
                      onClick={this.cancel.bind(this)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-lg btn-danger btn-block form-control"
                      name="delete"
                      onClick={this.deleteDonation.bind(this)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <script src="app.js" />
        </div>
        <div id="body2">
          <header>Donors Site</header>
          <div id="regBox">
            <h5>Edit My Account:</h5>
            <form className="form-signin" onSubmit={this.onSubmitUpdateDonor}>
              <div className="input-group">
                <input
                  type="text"
                  name="donorFullName"
                  value={this.state.donorFullName}
                  className="form-control"
                  placeholder="Full Name"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="donorEmail"
                  value={this.state.donorEmail}
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="donorGender"
                  value={this.state.donorGender}
                  className="form-control"
                  placeholder="Gender"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="number"
                  name="donorAge"
                  value={this.state.donorAge}
                  className="form-control"
                  placeholder="Age"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="donorCity"
                  value={this.state.donorCity}
                  className="form-control"
                  placeholder="City"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="donorPassword"
                  value={this.state.donorPassword}
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="submit"
                  value="Confirm"
                  className="btn btn-lg btn-light btn-block form-control"
                />
              </div>
              <div className="input-group">
                <input
                  type="button"
                  value="Cancel"
                  className="btn btn-lg btn-light btn-block form-control"
                  onClick={this.cancel.bind(this)}
                />
              </div>
              <input
                type="button"
                value="Delete The Account"
                id="deleteBtn"
                className="btn btn-lg btn-danger btn-block form-control"
                onClick={this.delete.bind(this)}
              />
              <div id="divideBtns">
                <input
                  type="button"
                  value="Delete"
                  id="confirmBtn"
                  className="btn btn-lg btn-danger btn-block form-control halfBtn"
                  onClick={this.confirmDelete.bind(this)}
                />
                <input
                  type="button"
                  value="Cancel"
                  id="cancelBtn"
                  className="btn btn-lg btn-light btn-block form-control halfBtn"
                  onClick={this.cancelDelete.bind(this)}
                />{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(loggedInDonor);
