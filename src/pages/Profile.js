import React, { useState, useEffect } from 'react';
import Navbar from '../components/navi';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
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

  if (!userData) {
    return (
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    );
  }

  return (
    <div className='out'>
      <div className='fixed top-0 w-full'>
        <Navbar />
      </div> 
      <div className='h-full'>
        <div className='flex justify-center text-3xl font-bold mt-44'>
          <p>User Details</p>
        </div>
        <div className='flex justify-center mt-8'>
          {userData && (
            <div className='w-full md:w-3/ lg:w-1/2 xl:w-1/3 bg-gray-300 rounded-lg p-8'>
              <p className='mb-2 text-xl'>
                Name: {userData.firstname} {userData.lastname}
              </p>
              <p className='mb-2 text-xl'>Age: {userData.age}</p>
              <p className='mb-2 text-xl'>Email: {userData.email}</p>
              <p className='mb-2 text-xl'>Contact: {userData.contact}</p>
              <p className='mb-2 text-xl'>Address: {userData.address}</p>
            </div>
          )}
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
  );
}
