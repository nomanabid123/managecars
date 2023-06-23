import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LoggedIn from './loggedIn';
import LogIn from '../components/login';
import SignUp from '../components/signup';
import Dashboard from '../pages/dashboard';

const RouteConfig = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<LoggedIn Component={LogIn}/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={
                    <Dashboard />
                } />
            </Routes>

            </div>
     );
}
 
export default RouteConfig;