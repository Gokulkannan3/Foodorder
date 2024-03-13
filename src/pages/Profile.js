import React, { useState, useEffect } from 'react';
import Navbar from '../components/navi';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

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
    </div>
  );
}
