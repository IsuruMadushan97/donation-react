import React from "react";
import { Link } from "react-router-dom";

class loggedInHospital extends React.Component {
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
              onkeyup="search()"
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
                <tr onclick="window.location='#';">
                  <th onclick="sortTable(0)" scope="col">
                    ID
                  </th>
                  <th onclick="sortTable(1)" scope="col">
                    Type
                  </th>
                  <th onclick="sortTable(2)" scope="col">
                    Notes
                  </th>
                  <th onclick="sortTable(3)" scope="col">
                    Date
                  </th>
                  <th onclick="sortTable(4)" scope="col">
                    Gender
                  </th>
                  <th onclick="sortTable(5)" scope="col">
                    Email
                  </th>
                  <th onclick="sortTable(6)" scope="col">
                    Age
                  </th>
                  <th onclick="sortTable(7)" scope="col">
                    City
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>1</b>
                  </td>
                  <td>blood</td>
                  <td>O+</td>
                  <td>2018/01/17</td>
                  <td>Male</td>
                  <td>test@examlpe.com</td>
                  <td>27</td>
                  <td>Riyadh</td>
                </tr>
                <tr>
                  <td>
                    <b>2</b>
                  </td>
                  <td>kidney</td>
                  <td>none</td>
                  <td>2017/11/08</td>
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
                  <td>2018/02/04</td>
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
