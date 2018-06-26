import axios from "axios";

let DonorProfile = (function() {
  // function setEm(name) {
  //   let getString = "http://localhost:8000/donors/" + name;
  //   axios.get(getString).then(res => {
  //     localStorage.setItem("emDonor", res.data.id);
  //     localStorage.setItem("emilDonor", name);
  //   });
  // }

  // async function getEm() {
  //   let returnedId;
  //   let token = localStorage.getItem("token");
  //   let getString = "http://localhost:8000/donortoken?token=" + token;
  //   axios.get(getString).then(res => {
  //     returnedId = res.data;
  //     console.log("returnedId1", returnedId);
  //   });
  //   console.log("returnedId2", returnedId);
  //   return returnedId;
  // }
  async function getEm() {
    let returnedId;
    let token = localStorage.getItem("token");
    let getString = "http://localhost:8000/donortoken?token=" + token;
    await axios.get(getString).then(res => {
      returnedId = res.data;
    });
    return returnedId;
  }

  function signout() {
    localStorage.setItem("token", "");
  }

  async function isAuthenticated() {
    let returnedBoolean;
    let token = localStorage.getItem("token");
    let getString = "http://localhost:8000/donortoken?token=" + token;
    axios.get(getString).then(res => {
      if (res.data !== "") {
        returnedBoolean = true;
      } else {
        returnedBoolean = false;
      }
    });
    return returnedBoolean;
  }

  function setToken(token) {
    localStorage.setItem("token", token);
  }

  return {
    getEm: getEm,
    signout: signout,
    isAuthenticated: isAuthenticated,
    setToken: setToken
  };
})();

export default DonorProfile;
