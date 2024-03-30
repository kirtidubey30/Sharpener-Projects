import React, { createContext, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useAutoLogout = (token, logoutHandler) => {
  useEffect(() => {
    if (token) {
      const logoutTimer = setTimeout(() => {
        logoutHandler();
      }, 5 * 60 * 1000); // Logout after 5 minutes
      return () => clearTimeout(logoutTimer);
    }
  }, [token, logoutHandler]);
};

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
    console.log("inside logOut Handler ");
    setToken(null);
    history.replace("/");
    localStorage.removeItem("token");
  };

  // Use custom hook for auto logout
  useAutoLogout(token, logoutHandler);

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
