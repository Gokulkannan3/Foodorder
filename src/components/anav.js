import React, { useState } from "react";
import innum from '../images/innum.png'
import '../App.css'
import { Link } from "react-router-dom";
import './lnav.css';
import menu from '../images/menu.png'
import close from '../images/remove.png'

export default function Anav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className='out bg-black h-32'>
            <div className="flex justify-start translate-y-3 translate-x-5">
                <img src={innum} alt="innum" className="w-24" />
            </div>
            <div className="head font-bold text-white translate-x-36 -translate-y-16 text-2xl">
                <p>Innum Vai!!!</p>
                <p>Happy Tummy Ahead!!!</p>
            </div>
            <div className="flex justify-end -translate-y-28">
                <div className={`menu cursor-pointer w-14 flex justify-end ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                    <img src={menu} alt="menu" className="w-8" />
                </div>
            </div>
            <div className="flex justify-end -translate-y-40">
                <div className="bg-black w-52 items-center-translate-y-40 -mt-7">
                    <ul className={menuOpen ? "open" : ":"}>
                        <div className="w-6 cursor-pointer translate-x-40 mt-2" onClick={closeMenu}>
                            <img src={close} alt="Close"/>
                        </div>
                        <li>
                            <Link to='/asignin'>
                                <button className="text-white font-bold mb-4 text-xl h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black">Signin</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
