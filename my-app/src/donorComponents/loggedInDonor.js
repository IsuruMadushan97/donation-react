import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const em = "wow@wow.com";
class loggedInDonor extends React.Component {
  state = {
    donations: []
  };
  // state = {
  //   email: ""
  // };
  componentDidMount() {
    let getString = "http://localhost:8000/donations/" + em;
    axios.get(getString).then(res => {
      const donations = res.data;
      this.setState({ donations });
      console.log(this.state.donations);
    });
  }

  handleClick(e) {
    this.func(e);
  }
  func(e) {
    let about = document.getElementById("about3");
    let about2 = document.getElementById("about2");
    about.style = "display:none";
    about2.style = "display:block";
    let id = e.target.parentElement.childNodes[0].innerText;
    console.log(id);
  }

  render() {
    return (
      <div>
        <header>Donors Site</header>
        <div id="fullBox2">
          <div id="main">
            <h2>Welcome Ibrahim!</h2>
            <h5>Your Donations:</h5>
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
                  <tr onClick={this.handleClick.bind(this)}>
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
            <Link to="/editDonorAcct" className={"text-danger"}>
              Edit my account
            </Link>
            <Link to="/" className={"text-dark"}>
              Logout
            </Link>

            <div id="about3">
              <h5>Add Donation:</h5>
              <form
                className="form-signin"
                action="index.html"
                method="post"
                id="hideform"
              >
                <div className="input-group">
                  <input
                    type="text"
                    id="type"
                    name="donatType"
                    className="form-control"
                    placeholder="Donation Type"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    id="notes"
                    name="donatNotes"
                    className="form-control"
                    placeholder="Notes, Such as blood type"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    value="Add"
                    className="btn btn-lg btn-light btn-block form-control"
                    name="add"
                    id="myClick"
                  />
                </div>
              </form>
            </div>
            <div id="about2">
              <h5>Edit My Donation:</h5>
              <form
                className="form-signin"
                action="index.html"
                method="post"
                id="hideform"
              >
                <div className="input-group">
                  <input
                    type="text"
                    id="type"
                    name="donatType"
                    className="form-control"
                    placeholder="Donation Type"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    id="notes"
                    name="donatNotes"
                    className="form-control"
                    placeholder="Notes, Such as blood type"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    value="Edit"
                    className="btn btn-lg btn-light btn-block form-control"
                    name="edit"
                    id="myClick"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="button"
                    value="cancel"
                    className="btn btn-lg btn-light btn-block form-control"
                    name="cancel"
                    // onClick="window.location='/donor/loggedInDonor/index.html';"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <script src="app.js" />
      </div>
    );
  }
}

export default loggedInDonor;
