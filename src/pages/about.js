import React from 'react';
import '../App.css';
import Navbar from '../components/navi';
import coffee from '../images/coffee.png';
import pasta from '../images/pasta.png';
import rosemilk from '../images/rosemilk.png'
import './home.css'
import { Link } from 'react-router-dom';
import insta from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import mail from '../images/envelope.png';

export default function About() {
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
      <p className='font-black text-5xl flex justify-center mt-10'>About Us</p>
      <div>
        <p className='font-semibold p-10 text-2xl'>
        Innum Vai is dedicated to creating a revolutionary platform that celebrates the culinary talents of home makers worldwide, offering a gateway to experiencing joy through healthy, home-cooked meals. Our mission is to serve happiness, one bite at a time, by sharing the authentic flavors and comforting dishes crafted with love and care from our kitchen. With a commitment to quality and convenience, we provide ready-to-eat options that satisfy cravings and nourish the soul. Join us on our journey as we bring the essence of home cooking to the world, making every meal a delightful and fulfilling experience.
        </p>
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
