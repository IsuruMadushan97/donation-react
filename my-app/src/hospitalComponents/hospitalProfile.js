import axios from "axios";

let HospitalProfile = (function() {
  let em = "";
  let emil = "";
  let authenticated = false;

  function setEm(name) {
    let getString = "http://localhost:8000/hospitals/" + name;
    axios.get(getString).then(res => {
      localStorage.setItem("em", res.data.id);
      localStorage.setItem("emil", name);
    });
  }

  function getEm() {
    return localStorage.getItem("em");
  }

  function getEmil() {
    return localStorage.getItem("emil");
  }

  function authenticate() {
    localStorage.setItem("authenticate", "true");
  }

  function signout() {
    localStorage.setItem("authenticate", "false");
  }

  function isAuthenticated() {
    return "true" === localStorage.getItem("authenticate");
  }

  return {
    getEm: getEm,
    setEm: setEm,
    getEmil: getEmil,
    authenticate: authenticate,
    signout: signout,
    isAuthenticated: isAuthenticated
  };
})();

export default HospitalProfile;
