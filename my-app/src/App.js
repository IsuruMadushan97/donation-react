import React, { Component } from "react";
import "./app.css";

import donorRegister from "./donorComponents/donorRegister";
import loggedInDonor from "./donorComponents/loggedInDonor";
import editDonorAcct from "./donorComponents/editDonorAcct";

import hospitalRegister from "./hospitalComponents/hospitalRegister";
import loggedInHospital from "./hospitalComponents/loggedInHospital";
import editHospitalAcct from "./hospitalComponents/editHospitalAcct";

// import route Components here
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={donorRegister} />
              <Route path="/loggedInDonor" component={loggedInDonor} />
              <Route path="/editDonorAcct" component={editDonorAcct} />

              <Route path="/hospitalRegister" component={hospitalRegister} />
              <Route path="/loggedInHospital" component={loggedInHospital} />
              <Route path="/editHospitalAcct" component={editHospitalAcct} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
