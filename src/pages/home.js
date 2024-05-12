import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import coffee from '../images/coffee.png';
import pasta from '../images/pasta.png';
import rosemilk from '../images/rosemilk.png'
import './home.css'
import cc from '../images/cc.png';
import rr from '../images/rr.jpg';
import './menu.css'
import { useNavigate } from 'react-router-dom';
import insta from '../images/instagram.png';
import { Link } from 'react-router-dom';
import whatsapp from '../images/whatsapp.png';
import mail from '../images/envelope.png';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/login')
  }
  
  return (
    <div>
      <Navbar className="navbar" />
      <div className="carousel w-full bg-red-300 h-96">
        <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
          <img src={coffee} alt='coffee' className="coffee w-96 h-96"/>
          <p className='text-blue-900 font-bold text-7xl font-serif flex justify-center items-center gap-8'>How About <p className='text-amber-950'>Coffee Breaks!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item bg-amber-600 relative w-full flex justify-center items-center">
          <img alt='pasta' src={pasta} className="pasta w-96 h-96" />
          <p className='text-white font-bold text-7xl font-serif flex justify-center items-center gap-8'>Taste our <p className='text-black'>Yummy pastas!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="bg-sky-800 carousel-item relative w-full flex justify-center items-center">
          <img alt='rosemilk' src={rosemilk} className="rosemilk w-96 h-96" />
          <p className='text-white font-bold text-7xl font-serif flex justify-center items-center gap-8'>Rosemilk Vangi <p className='text-red-400'>Tharaen Da!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className='car flex justify-center items-center mt-10 gap-10 mb-10'>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='cc' src={cc} alt="cc"/></figure>
          <div className="card-body">
            <h2 className="card-title">Coffee!</h2>
            <p>Feelig tired? Have some coffeee</p>
            <div className="card-actions flex justify-end ">
              <button to="/login" className='btn flex bg-red-500 hover:bg-red-500' onClick={handleClick}>
                Book Now
              </button>  
            </div>
          </div>
        </div>
        <div className="rose card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img src={rr} className='rr' alt="rr" /></figure>
          <div className="card-body">
            <h2 className="card-title">Rose Milk!</h2>
            <p>Get chilled with some Rose Milk!!</p>
            <div className="bu card-actions flex justify-end ">
              <button to="/login" className='btn flex bg-red-500 hover:bg-red-500' onClick={handleClick}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="footer footer-center p-10 bg-black text-red-500 rounded">
          <nav className="fnav grid grid-flow-col gap-4">
            <Link to={'/about'} className="link link-hover hover:text-white text-xl">About</Link>
            <Link to={'/contact'} className="link link-hover hover:text-white text-xl">Contact</Link>
            <Link to={'/team'} className="link link-hover hover:text-white text-xl">Team</Link>
          </nav> 
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.instagram.com/innum_vai/"><img className='cursor-pointer' src={insta} alt='insta'/></a>
              <a href='https://wa.me/9941269128'><img className='cursor-pointer' src={whatsapp} alt='insta'/></a>
              <a href='mailto:innumvai@gmail.com'><img className='cursor-pointer' src={mail} alt='insta'/></a>
            </div>
          </nav> 
          <aside>
            <p>Copyright © 2024 - All right reserved by Innumvai</p>
          </aside>
        </footer>
      </div>
    </div>
  )
}
