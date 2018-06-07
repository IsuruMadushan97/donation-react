import React, { Component } from "react";
import "./style/app.css";

import donorRegister from "./donorComponents/donorRegister";
import loggedInDonor from "./donorComponents/loggedInDonor";

import hospitalRegister from "./hospitalComponents/hospitalRegister";
import loggedInHospital from "./hospitalComponents/loggedInHospital";

// import route Components here
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={donorRegister} />
            <Route path="/loggedInDonor" component={loggedInDonor} />

            <Route path="/hospitalRegister" component={hospitalRegister} />
            <Route path="/loggedInHospital" component={loggedInHospital} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
