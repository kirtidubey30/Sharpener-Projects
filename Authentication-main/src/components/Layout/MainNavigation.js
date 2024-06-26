import { Link, withRouter } from "react-router-dom";
import AuthContext from "../../store/AuthContext.js";
import classes from "./MainNavigation.module.css";
import { useContext, useEffect } from "react";
import React from "react";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  useEffect(() => {
    console.log(`authCtx.isLoggedIn from MainNavigation is ${isLoggedIn}`);
  }, [isLoggedIn]);

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
        {/* <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <button onClick={() => authCtx.logout()}>Logout</button>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default withRouter(MainNavigation);
