import React from 'react'
import Home from '../pages/Home';
import Login from '../pages/Login';
import { Routes as MyRoutes, Route, Link } from "react-router-dom";
import SignUp from '../pages/SignUp'
const Routes = () => {
    return (
        <div >
        
       <MyRoutes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
       </MyRoutes>
       </div>
    )
}

export default Routes
