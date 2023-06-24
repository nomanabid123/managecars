import React from 'react'
import {Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const LoggedIn = ({Component}) => {
    const {isAuth} = useSelector(state=>state.auth)
    if(isAuth){
        return <Navigate to="/dashboard" />
    }
    return (
        <Component />
    )

}
 
export default LoggedIn;