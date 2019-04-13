import axios from "axios";

let DonorProfile = (function () {
  function setEm(name) {
    let getString = "http://localhost:8000/donors/" + name;
    axios.get(getString).then(res => {
      localStorage.setItem("emDonor", res.data.id);
      localStorage.setItem("emilDonor", name);
    });
  }

  function getEm() {
    return localStorage.getItem("emDonor");
  }

  function getEmil() {
    return localStorage.getItem("emilDonor");
  }

  function authenticate() {
    localStorage.setItem("authenticateDonor", "true");
  }

  function signout() {
    localStorage.setItem("authenticateDonor", "false");
  }

  function isAuthenticated() {
    return "true" === localStorage.getItem("authenticateDonor");
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
