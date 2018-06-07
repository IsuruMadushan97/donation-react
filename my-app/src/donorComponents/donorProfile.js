import axios from "axios";

let DonorProfile = (function() {
  let em = "";
  let emil = "";
  let authenticated = false;

  function setEm(name) {
    let getString = "http://localhost:8000/donors/" + name;
    axios.get(getString).then(res => {
      em = res.data.id;
      emil = name;
    });
  }

  function getEm() {
    return em;
  }

  function getEmil() {
    return emil;
  }

  function authenticate() {
    authenticated = true;
  }

  function signout() {
    authenticated = false;
  }

  function isAuthenticated() {
    return authenticated;
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
