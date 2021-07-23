import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../Components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from "react-redux";
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../action/authAction';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [ checking, setChecking ] = useState(true);
  const [ isloggeIn, setLoggeIn ] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setLoggeIn(true);
      } else {
        setLoggeIn(false);
      }
    });
    setChecking(false);
  }, [dispatch, setLoggeIn, setChecking])

  if (checking) {
    return (
      <h1>Espere...</h1>
    );
  }

  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={isloggeIn}
          />
          <PrivateRouter
            path="/"
            component={DashboardRoutes}
            isAuthenticated={isloggeIn}
          />
        </Switch>
      </div>
    </Router>
  );
};
