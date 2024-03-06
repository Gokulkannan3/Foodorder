import React from "react";
import innum from '../images/innum.png'
import './navbar.css'
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className='out bg-black h-32'>
            <div className="flex justify-start translate-y-3 translate-x-5">
                <img src={innum} alt="innum" className="w-24"/>
            </div>
            <div className="head font-bold text-white translate-x-36 -translate-y-16 text-lg">
                <p>Innum Vai!!!</p>
                <p>Happy Tummy Ahead!!!</p>
            </div>
            <div className="flex justify-end -translate-y-28 -translate-x-20 mt-3">
                <Link to="/login">
                    <button className='btn btn-outline border-red-500 text-white font-bold text-xl h-12 w-20 rounded-lg hover:bg-red-400 hover:text-black'>
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    );
}