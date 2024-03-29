import React, { createContext, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
useEffect(() => {
  if (token) {
    setTimeout(() => {
      logoutHandler();
    }, 5 * 60 * 1000);
  }
}, []);

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
