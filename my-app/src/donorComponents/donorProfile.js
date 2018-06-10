import axios from "axios";

let DonorProfile = (function() {
  function setEm(name) {
    let getString = "http://localhost:8000/donors/" + name;
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

export default DonorProfile;
