import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from "./pages/about";
import Login from "./pages/login";
import Signin from "./pages/signin";
import Menu from "./pages/menu";
import Homes from "./pages/homes";
import Alogin from "./pages/alogin";
import Asignin from "./pages/asignin";
import Admin from "./pages/admin";
import Profile from "./pages/Profile";
import Book from "./pages/book";
import Track from "./pages/track"

const AllRoutes = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/admin" element={<Admin/>}/>
            <Route exact path="/home" element={<Homes/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/alogin" element={<Alogin/>}/>
            <Route exact path="/asignin" element={<Asignin/>}/>
            <Route exact path="/signup" element={<Signin/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/menu" element={<Menu/>}/>
            <Route exact path="/pro" element={<Profile/>}/>
            <Route exact path="/book" element={<Book/>}/>
            <Route exact path="/track/:id" element={<Track/>}/>
        </Routes> 
    )
}

export default AllRoutes;