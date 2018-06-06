import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
let em = 4;
let emil = "the newest10";
class loggedInDonor extends React.Component {
  state = {
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
    donorPassword: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.donorFullName);
  };

  onSubmit = e => {
    e.preventDefault();
    let { type, notes } = this.state;

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
      console.log("1:" + postString);
    });
    setTimeout(() => {
      this.componentDidMount();
    }, 500);
    this.setState({ type: "", notes: "" });
  };

  onSubmitUpdateDonation = e => {
    e.preventDefault();
    let id = this.state.updateId;
    let type = this.state.updateType;
    let notes = this.state.updateNotes;

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
      console.log("1:" + postString);
    });
    setTimeout(() => {
      this.componentDidMount();
    }, 500);
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
    console.log("Old email: " + em);
    console.log("New Email: " + donorEmail);

    //   The NewAAA?email=WWWW&name=New Name&gender=New Gender&age=30&city=New City&password=New Password
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
      console.log("1:" + postString);
    });
    setTimeout(() => {
      this.componentDidMount();
    }, 500);
    this.cancel();
  };

  componentDidMount() {
    let getString = "http://localhost:8000/donations/" + em;
    axios.get(getString).then(res => {
      const donations = res.data;
      if (donations != null) this.setState({ donations: donations });
      console.log("HHHEEERRREE", this.state.donations);
    });
  }

  donationClicked(e) {
    let about = document.getElementById("about3");
    let about2 = document.getElementById("about2");
    about.style = "display:none";
    about2.style = "display:block";
    let id = e.target.parentElement.childNodes[0].innerText;
    let type = e.target.parentElement.childNodes[1].innerText;
    let notes = e.target.parentElement.childNodes[2].innerText;

    this.setState({ updateId: id, updateType: type, updateNotes: notes });
    setTimeout(() => {
      console.log(
        this.state.updateId,
        this.state.updateType,
        this.state.updateNotes
      );
    }, 100);
  }

  editAcct(e) {
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    body1.style = "display:none";
    body2.style = "display:block";

    let getString = "http://localhost:8000/donors/" + emil;
    axios.get(getString).then(res => {
      const donorInfo = res.data;
      // this.setState({ donations: donations });
      console.log(donorInfo.name);
      this.setState({
        donorFullName: donorInfo.name,
        donorEmail: donorInfo.email,
        donorGender: donorInfo.gender,
        donorAge: donorInfo.age,
        donorCity: donorInfo.city,
        donorPassword: donorInfo.password
      });
    });

    setTimeout(() => {
      console.log(
        this.state.donorFullName,
        this.state.donorEmail,
        this.state.donorGender,
        this.state.donorAge,
        this.state.donorCity,
        this.state.donorPassword
      );
    }, 100);
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

  deleteDonation(e) {
    e.preventDefault();
    const id = this.state.updateId;

    var postString = "http://localhost:8000/donations/" + id;
    axios.delete(postString, {}).then(result => {
      console.log("1:" + postString);
    });
    setTimeout(() => {
      this.componentDidMount();
    }, 500);
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
              <input
                type="button"
                value="Edit my account"
                className="btn btn-light btn-block form-control"
                name="cancel"
                onClick={this.editAcct.bind(this)}
              />

              <h5>Click on a donation to edit:</h5>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Type</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.donations.map(person => (
                    <tr onClick={this.donationClicked.bind(this)}>
                      <th id="aa" scope="row">
                        {person.id}
                      </th>
                      <td>{person.type}</td>
                      <td>{person.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div id="right">
              <Link to="/" className={"text-dark"}>
                Logout
              </Link>

              <div id="about3">
                <h5>Add Donation:</h5>
                <form
                  className="form-signin"
                  onSubmit={this.onSubmit}
                  id="hideform"
                >
                  <div className="input-group">
                    <input
                      type="text"
                      name="type"
                      value={this.state.type}
                      className="form-control"
                      placeholder="Donation Type"
                      onChange={this.onChange}
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
                <h5>Edit Donation: ID: {this.state.updateId}</h5>
                <form
                  className="form-signin"
                  onSubmit={this.onSubmitUpdateDonation}
                  id="hideform"
                >
                  <div className="input-group">
                    <input
                      type="text"
                      name="updateType"
                      value={this.state.updateType}
                      className="form-control"
                      placeholder="Donation Type"
                      onChange={this.onChange}
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
                      value="Delete"
                      className="btn btn-lg btn-light btn-block form-control"
                      name="delete"
                      onClick={this.deleteDonation.bind(this)}
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
            <form
              className="form-signin"
              onSubmit={this.onSubmitUpdateDonor}
              id="hideform"
            >
              <div className="input-group">
                <input
                  type="text"
                  name="donorFullName"
                  value={this.state.donorFullName}
                  className="form-control"
                  placeholder="Full Name"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="donorEmail"
                  value={this.state.donorEmail}
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onChange}
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
              <div className="input-group">
                <input
                  type="button"
                  value="Cancel"
                  className="btn btn-lg btn-light btn-block form-control"
                  name="cancel"
                  onClick={this.cancel.bind(this)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default loggedInDonor;
