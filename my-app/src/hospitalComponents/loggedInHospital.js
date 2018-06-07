import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
let em = 1;
let emil = "asd";

class loggedInHospital extends React.Component {
  state = {
    donations: [],
    donors: [],
    hospitalFullName: "",
    hospitalEmail: "",
    hospitalCity: "",
    hospitalPassword: ""
  };
  componentDidMount() {
    let donations = [];
    axios.get("http://localhost:8000/donations").then(res => {
      donations = res.data;

      let donors = [];
      donations.forEach(element => {
        let getString = "http://localhost:8000/donors/" + element.donor_id;
        axios.get(getString).then(res => {
          let donor = res.data;
          // this.setState({ donations });
          donors.push(donor);
        });
      });

      this.setState({ donations: donations, donors: donors });
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitUpdateHospital = e => {
    e.preventDefault();
    let hospitalFullName = this.state.hospitalFullName;
    let hospitalEmail = this.state.hospitalEmail;
    let hospitalCity = this.state.hospitalCity;
    let hospitalPassword = this.state.hospitalPassword;
    // hospitalFullName = encodeURIComponent(hospitalFullName);
    // hospitalCity = encodeURIComponent(hospitalCity);
    // hospitalPassword = encodeURIComponent(hospitalPassword);

    //    http://localhost:8000/hospitals/3?email=SSS&name=SSS&city=SSS&password=SSS
    var postString =
      "http://localhost:8000/hospitals/" +
      em +
      "?email=" +
      hospitalEmail +
      "&name=" +
      hospitalFullName +
      "&city=" +
      hospitalCity +
      "&password=" +
      hospitalPassword;
    axios.post(postString, {}).then(result => {});
    setTimeout(() => {
      this.componentDidMount();
    }, 500);
    this.cancel();
  };

  editAcct(e) {
    let body1 = document.getElementById("body3");
    let body2 = document.getElementById("body4");
    body1.style = "display:none";
    body2.style = "display:block";

    let getString = "http://localhost:8000/hospitals/" + emil;
    axios.get(getString).then(res => {
      const hospitalInfo = res.data;
      // this.setState({ donations: donations });
      this.setState({
        hospitalFullName: hospitalInfo.name,
        hospitalEmail: hospitalInfo.email,
        hospitalCity: hospitalInfo.city,
        hospitalPassword: hospitalInfo.password
      });
    });
  }

  search(e) {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query

    let e2 = document.getElementById("sel1");
    let columnIndex = e2.options[e2.selectedIndex].value;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[columnIndex];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  cancel(e) {
    let body1 = document.getElementById("body3");
    let body2 = document.getElementById("body4");
    body1.style = "display:block";
    body2.style = "display:none";
  }

  render() {
    return (
      <div>
        <div id="body3">
          <header>Hospitals Site</header>
          <div id="fullBox3">
            <Link to="/hospitalRegister" className={"text-dark"}>
              Logout
            </Link>

            <h2>Welcome!</h2>
            <input
              type="button"
              value="Edit my account"
              className="btn btn-light btn-block form-control"
              name="cancel"
              onClick={this.editAcct.bind(this)}
            />

            <h5>Choose Donors:</h5>
            <div id="searchBox">
              <input
                type="text"
                id="myInput"
                className="form-control"
                onKeyUp={this.search.bind(this)}
                placeholder="Search.."
              />
              <div id="options" className="form-group">
                <select className="form-control" id="sel1">
                  <option value="0">ID</option>
                  <option value="1">Type</option>
                  <option value="2">Notes</option>
                  <option value="3">Gender</option>
                  <option value="4">Email</option>
                  <option value="5">Age</option>
                  <option value="6">City</option>
                </select>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table id="myTable" className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Notes</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.donations.map(donation => (
                    <tr>
                      <td>
                        <b>{donation.id}</b>
                      </td>
                      <td>{donation.type}</td>
                      <td>{donation.notes}</td>
                      <td>{this.state.donors.gender}</td>
                      <td>{this.state.donors.email}</td>
                      <td>{this.state.donors.age}</td>
                      <td>{this.state.donors.city}</td>
                    </tr>
                  ))}

                  <tr>
                    <td>
                      <b>2</b>
                    </td>
                    <td>kidney</td>
                    <td>none</td>
                    <td>Female</td>
                    <td>test@examlpe.com</td>
                    <td>20</td>
                    <td>Riyadh</td>
                  </tr>
                  <tr>
                    <td>
                      <b>3</b>
                    </td>
                    <td>lung</td>
                    <td>none</td>
                    <td>Male</td>
                    <td>test@examlpe.com</td>
                    <td>35</td>
                    <td>Jeddah</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="body4">
          <header>Hospitals Site</header>
          <div id="regBox2">
            <h5>Edit My Account:</h5>
            <form
              className="form-signin"
              onSubmit={this.onSubmitUpdateHospital}
              id="hideform"
            >
              <div className="input-group">
                <input
                  type="text"
                  name="hospitalFullName"
                  value={this.state.hospitalFullName}
                  className="form-control"
                  placeholder="Hospital Full Name"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="hospitalEmail"
                  value={this.state.hospitalEmail}
                  className="form-control"
                  placeholder="Admin Email"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="hospitalCity"
                  value={this.state.hospitalCity}
                  className="form-control"
                  placeholder="City"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="hospitalPassword"
                  value={this.state.hospitalPassword}
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

export default loggedInHospital;
