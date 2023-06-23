import React from 'react'
import {Navigate } from "react-router-dom";
const LoggedIn = ({Component}) => {
    const isAuth = true;
    if(isAuth){
        return <Navigate to="/dashboard" />
    }
    return (
        <Component />
    )

}
 
export default LoggedIn;