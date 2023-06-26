import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import LoggedIn from './LoggedIn';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import Dashboard from '../pages/dashboard/Index';
import PrivateRoute from './PrivateRoute';

//handle all the routes
const RouteConfig = () => {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <Routes>
        <Route path="/" element={<LoggedIn Component={LogIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;
