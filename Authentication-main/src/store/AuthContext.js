import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  setToken: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (token) => {
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken("");
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        setToken,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
