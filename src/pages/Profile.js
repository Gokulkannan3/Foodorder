import React, { useState, useEffect } from 'react';
import Navbar from '../components/navi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import insta from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import mail from '../images/envelope.png';

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      axios
        .get('https://fback-vteb.onrender.com/isAuth', {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        })
        .then((response) => {
          if (response.data.result && response.data.result.length > 0) {
            const userData = response.data.result[0];
            setUserData(userData);
            localStorage.setItem('userData', JSON.stringify(userData));
          } else {
            console.error('No user details found in the response');
          }
        })
        .catch((error) => {
          console.error('An unexpected error occurred:', error.message);
        });
    }
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex-grow'>
        <div className='flex justify-center text-3xl font-bold mt-16'>
          <p>User Details</p>
        </div>
        <div className='flex justify-center'>
            {userData && (
                <div className='flex justify-center bg-red-400 w-96 rounded-lg h-auto items-center p-4 text-2xl mt-16'>
                    <div>
                        <p className='mb-2'>Name: {userData.firstname} {userData.lastname}</p>
                        <p className='mb-2'>Date of Birth: {userData.dob}</p>
                        <p className='mb-2'>Age: {userData.age}</p>
                        <p className='mb-2'>Email: {userData.email}</p>
                        <p className='mb-2'>Contact: {userData.contact}</p>
                        <p className='mb-2'>Address: {userData.address}</p>
                    </div>
                </div>    
            )}
        </div>
      </div>
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
  );
}
