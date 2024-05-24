import React from 'react';
import Navbar from '../components/navi';
import { Link } from 'react-router-dom';
import insta from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import mail from '../images/envelope.png';
import varsha from '../images/varshaa.jpg'
import './team.css';
import vishal from '../images/vishal.jpg';
import gokul from '../images/gokulweb.jpg'
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

export default function Team() {
  return (
    <div>
      <Navbar/>
      <p className='font-black text-6xl flex justify-center mt-10'>Meet Our Team</p>
        <div className='flex justify-center mt-10'>
          <div className="avatar">
            <div className='ima flex justify-center'>
              <img alt="Remy Sharp" src={varsha} className='im rounded-full h-10'/>
            </div>
            <div className='te'>
              <p className='text-xl font-black'>Founder</p>
              <p className='text-lg'>Varshaa Venkat</p>
            </div>
          </div>
        </div>
        <nav className='nav -translate-y-72 mt-1'>
          <div className="det grid grid-flow-col">
            <a href="https://www.instagram.com/innum_vai/" className='ml-40 mt-2'><img className='cursor-pointer' src={insta} alt='insta'/></a>
            <a href='https://wa.me/9941269128'><img className='cursor-pointer mt-2 -ml-12' src={whatsapp} alt='insta'/></a>
            <a href='mailto:innumvai@gmail.com'><img className='cursor-pointer mt-2 -ml-24' src={mail} alt='insta'/></a>
          </div>
        </nav>
        <div className='ab'>
          <div className='o flex justify-center mt-10'>
            <div className="avatar">
              <div className='ima flex justify-center'>
                <img alt="Remy Sharp" src={vishal} className='im rounded-full h-10'/>
              </div>
              <div className='te'>
                <p className='text-xl font-black'>Social Media Manager</p>
                <p className='text-lg'>Vishal Aditya</p>
              </div>
          </div>
        </div>
        <nav className='nav -translate-y-72 mt-1'>
          <div className="det grid grid-flow-col">
            <a href="https://www.instagram.com/innum_vai/" className='ml-40 mt-2'><img className='cursor-pointer' src={insta} alt='insta'/></a>
            <a href='https://wa.me/9941269128'><img className='cursor-pointer mt-2 -ml-12' src={whatsapp} alt='insta'/></a>
            <a href='mailto:innumvai@gmail.com'><img className='cursor-pointer mt-2 -ml-24' src={mail} alt='insta'/></a>
          </div>
        </nav> 
        <div className='ab'>
          <div className='ab t flex justify-center mt-10'>
            <div className="av avatar">
              <div className='ima flex justify-center'>
                <img alt="Remy Sharp" src={gokul} className='im rounded-full h-10'/>
              </div>
              <div className='te'>
                <p className='text-xl font-black'>Fullstack Web Developer</p>
                <p className='text-lg'>Gokul Kannan</p>
              </div>
            </div>
          </div>
        </div>
      <nav className='nav -translate-y-72 mt-1'>
        <div className="det grid grid-flow-col">
          <a href="https://github.com/Gokulkannan3/" className='ml-40 mt-2'><img className='cursor-pointer' src={github} alt='insta'/></a>
          <a href='https://www.linkedin.com/in/gokul-kannan-b8035a191/'><img className='cursor-pointer mt-2 -ml-12' src={linkedin} alt='insta'/></a>
          <a href='mailto:gokul8506@gmail.com'><img className='cursor-pointer mt-2 -ml-24' src={mail} alt='insta'/></a>
        </div>
      </nav> 
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