import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class loggedInHospital extends React.Component {
  state = {
    donations: [],
    donors: []
  };
  componentDidMount() {
    let donations = [];
    axios.get("http://localhost:8000/donations").then(res => {
      donations = res.data;
      console.log(donations);

      let donors = [];
      donations.forEach(element => {
        // console.log(element.donor_email);

        let getString = "http://localhost:8000/donors/" + element.donor_email;
        axios.get(getString).then(res => {
          let donor = res.data;
          // this.setState({ donations });
          donors.push(donor);
        });
      });
      this.setState({ donations: donations, donors: donors });
      console.log(this.state.donors);
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

  render() {
    return (
      <div>
        <header>Hospitals Site</header>
        <div id="fullBox3">
          <Link to="/editHospitalAcct" className={"text-danger"}>
            Edit my account
          </Link>
          <Link to="/hospitalRegister" className={"text-dark"}>
            Logout
          </Link>

          <h2>Welcome!</h2>
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
                <option value="3">Date</option>
                <option value="4">Gender</option>
                <option value="5">Email</option>
                <option value="6">Age</option>
                <option value="7">City</option>
              </select>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table id="myTable" className="table">
              <thead className="thead-dark">
                {/* <tr onclick="window.location='#';"> */}
                <tr>
                  {/* <th onclick="sortTable(0)" scope="col"> */}
                  <th>ID</th>
                  {/* <th onclick="sortTable(1)" scope="col"> */}
                  <th>Type</th>
                  {/* <th onclick="sortTable(2)" scope="col"> */}
                  <th>Notes</th>
                  {/* <th onclick="sortTable(3)" scope="col"> */}
                  <th>Gender</th>
                  {/* <th onclick="sortTable(4)" scope="col"> */}
                  <th>Email</th>
                  {/* <th onclick="sortTable(5)" scope="col"> */}
                  <th>Age</th>
                  {/* <th onclick="sortTable(6)" scope="col"> */}
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {this.state.donations.map(donation => (
                  <tr>
                    <th>{donation.id}</th>
                    <td>{donation.type}</td>
                    <td>{donation.notes}</td>
                    {console.log("HERE1", this.state.donors)}
                    {console.log("HERE2", this.state.donations)}
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
    );
  }
}

export default loggedInHospital;
