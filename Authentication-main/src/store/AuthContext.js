import React, { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [token, setToken] = useState("");

  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    console.log("token from loginHandler()= ", token);
  };

  const logoutHandler = () => {
    console.log("inside logOut Hndler ");
    setToken(null);
    history.replace("/");
    localStorage.removeItem("token");
  };
  const contextVal = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextVal}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
