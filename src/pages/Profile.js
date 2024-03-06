import React, { useState, useEffect } from 'react';
import Navbar from '../components/navi';
import axios from 'axios';

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
    return <p>Loading...</p>;
  }

  return (
    <div className='out'>
      <div className='fixed top-0 w-full'>
        <Navbar />
      </div> 
      <div className='ca flex justify-center items-center min-h-screen text-black'>
        <div className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4'>
          {userData && (
            <div className='bg-red-400 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-xl'>
              <p className='mb-2'>
                Name: {userData.firstname} {userData.lastname}
              </p>
              <p className='mb-2'>Age: {userData.age}</p>
              <p className='mb-2'>Email: {userData.email}</p>
              <p className='mb-2'>Contact: {userData.contact}</p>
              <p className='mb-2'>Address: {userData.address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
