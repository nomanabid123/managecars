import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  return <Component />;
};

export default PrivateRoute;
