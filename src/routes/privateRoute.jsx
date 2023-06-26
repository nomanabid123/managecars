import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
//check if user is logged in or not protected routes
const PrivateRoute = ({ Component }) => {
  const { isAuth } = useSelector((state) => state.auth);
  //if user is not logged in then redirect to login page
  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  //if user is logged in then show the dashboard
  return <Component />;
};

export default PrivateRoute;
