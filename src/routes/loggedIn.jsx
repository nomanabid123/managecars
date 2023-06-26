import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//check if user is logged in or not
const LoggedIn = ({ Component }) => {
  const { isAuth } = useSelector((state) => state.auth);
  //if user is logged in then redirect to dashboard
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }
  //if user is not logged in then show the login page
  return <Component />;
};

export default LoggedIn;
