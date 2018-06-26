import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./style/app.css";

import DonorProfile from "./donorComponents/donorProfile";
import donorRegister from "./donorComponents/donorRegister";
import loggedInDonor from "./donorComponents/loggedInDonor";

import HospitalProfile from "./hospitalComponents/hospitalProfile";
import hospitalRegister from "./hospitalComponents/hospitalRegister";
import loggedInHospital from "./hospitalComponents/loggedInHospital";

// I will continue from this link
// https://stackoverflow.com/questions/41966762/reactjs-how-to-transfer-data-between-pages
const DonorPrivateRoute = ({ component: Component, ...rest }) => (
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

const HospitalPrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      HospitalProfile.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/hospitalRegister" />
      )
    }
  />
);

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: "some default data"
    };
  }

  updateData(data) {
    this.setState({ data });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={donorRegister} />
            <DonorPrivateRoute
              path="/loggedInDonor"
              component={loggedInDonor}
            />

            <Route path="/hospitalRegister" component={hospitalRegister} />
            <HospitalPrivateRoute
              path="/loggedInHospital"
              component={loggedInHospital}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
