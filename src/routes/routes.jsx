import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import LoggedIn from "./loggedIn";
import LogIn from "../components/login";
import SignUp from "../components/signup";
import Dashboard from "../pages/dashboard";
import PrivateRoute from "./privateRoute";

//handle all the routes
const RouteConfig = () => {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <Routes>
        <Route path="/" element={<LoggedIn Component={LogIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute Component={Dashboard} />}
        />
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;
