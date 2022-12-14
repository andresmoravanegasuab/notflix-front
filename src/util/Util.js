export const getToken = () => {
  let token = "";
  if (localStorage.getItem("authData")) {
    const authDataObj = JSON.parse(localStorage.getItem("authData"));
    token = "Basic " + authDataObj.token;
  }

  return token;
};
