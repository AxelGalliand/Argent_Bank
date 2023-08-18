import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "../Pages/Home";
import { SignIn } from "../Pages/Sign-in";
import { User } from "../Pages/User";

export function Routeur() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>    
    )
}