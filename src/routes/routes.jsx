import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LoggedIn from './loggedIn';
import LogIn from '../components/login';
import SignUp from '../components/signup';
import Dashboard from '../pages/dashboard';
import PrivateRoute from './privateRoute';

const RouteConfig = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<LoggedIn Component={LogIn}/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={
                   <PrivateRoute Component={Dashboard} />
                } />
            </Routes>

            </div>
     );
}
 
export default RouteConfig;