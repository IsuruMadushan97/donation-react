import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./style/app.css";
import DonorProfile from "./donorComponents/donorProfile";

// public + login
import donorRegister from "./donorComponents/donorRegister";

// protected
import loggedInDonor from "./donorComponents/loggedInDonor";

import hospitalRegister from "./hospitalComponents/hospitalRegister";
import loggedInHospital from "./hospitalComponents/loggedInHospital";

// import route Components here

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      DonorProfile.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* public + login*/}
            <Route exact path="/" component={donorRegister} />
            {/* protected */}
            {/* <Route path="/loggedInDonor" component={loggedInDonor} /> */}

            <Route path="/hospitalRegister" component={hospitalRegister} />
            <Route path="/loggedInHospital" component={loggedInHospital} />
            <PrivateRoute path="/loggedInDonor" component={loggedInDonor} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
