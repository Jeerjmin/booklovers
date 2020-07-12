import React from "react";
import { Router } from "@reach/router";
import { PublicRoute, PrivateRoute } from "./helpers";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const Routes = () => {
  return (
    <Router>
      <PrivateRoute component={HomePage} path="/" />
      <PublicRoute default component={LoginPage} path="login" />
      <PublicRoute component={RegisterPage} path="register" />
    </Router>
  );
};

export default Routes;
