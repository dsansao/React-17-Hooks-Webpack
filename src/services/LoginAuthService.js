import axios from "axios";

const API_URL = process.env.LOCAL_DB_URL;

const register = (username, email, password) => {
  return axios.post(API_URL + "users", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {

  const params = {
    username: username,
    password: password
  };
  
  return axios
    .get(API_URL + "users", { params })
    .then((response) => {
      if (response.data && response.data.length > 0 && response.data[0].accessToken) {
        localStorage.setItem("loggedUser", JSON.stringify(response.data[0]));
      } else {
        throw Error("User not found!");
      }
      //console.log('user', response.data);
      return response.data[0];
    });
};

const logout = () => {
  localStorage.removeItem("loggedUser");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("loggedUser"));
};

const isLogged = () => {
  return getCurrentUser() && getCurrentUser().accessToken;
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  isLogged
};

export default AuthService;