import React from 'react'
import Snav from '../components/asnav'
import { useState } from 'react';
import Axios from 'axios';
import Modal from 'react-modal';
import Lottie from 'lottie-react';
import Animation from './animation.json'
import { Link } from 'react-router-dom';

export default function Asignin() {

  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [name,setName] = useState('');
  const [showPassword,setShowPassword]=useState('');
  const [passwordMatch,setPasswordMatch]=useState('');
  const [showConfirmPassword,setShowConfirmPassword]=useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addUser = (e) => {
    e.preventDefault(); 
    if (password !== cpassword) {
      setPasswordMatch(false);
      return;
    }
    Axios.post(`https://fback-vteb.onrender.com/aregister`, {
      name: name,
      password:password,
      cpassword:cpassword,
    })
      .then(() => {
        console.log("Success");
      })
      .catch(() => {
        console.error();
      });
      setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <Snav/>
      <div class="border-b border-gray-900/10 p-5 flex justify-center items-center h-full">
      <form>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-6">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Admin name</label>
            <div class="mt-2">
              <input type="text" onChange={(e)=>{setName(e.target.value);}} name="first-name" id="first-name" maxLength={20} autocomplete="given-name" class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
        </div>
        <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-2">
              <input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} autocomplete="email" maxLength={8} class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
              <button
                type="button"
                className="ml-2 focus:outline-none"
                onClick={handleTogglePasswordVisibility}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            <div class="mt-2">
              <input type={showConfirmPassword ? 'text' : 'password'} onChange={(e) => setCpassword(e.target.value)} autocomplete="email" maxLength={8} class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
              <button
                type="button"
                className="ml-2 focus:outline-none"
                onClick={handleToggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          {!passwordMatch && (
              <p className="text-red-500 text-sm mt-2">Password and Confirm Password do not match</p>
            )}
        <div className='flex justify-center mt-5'>
          <button className='btn bg-red-500 font-bold text-xl text-white hover:bg-red-400 hover:text-black' type='submit' onClick={addUser}>Submit</button>
        </div>
        
        </form>
        <div className='flex justify-center items-center'>
        <Modal
          isOpen={modalIsOpen}
          contentLabel="Registration Success Modal"
          ariaHideApp={false}
          className='flex justify-center items-center content-center h-screen w-screen fixed top-0 left-0'
          overlayClassName='fixed inset-0 bg-gray-500 bg-opacity-75'
        >
          <div className='flex justify-center items-center content-center h-96 w-96 bg-white p-4 rounded-md'>
            <Lottie
              animationData={Animation}
              loop={false}
              autoplay={true}
              style={{ width: 400, height: 400, flex:1,justifyContent:'center', alignItems:'center'}}
            />
            
          </div>
          <Link to='/login'>
            <button onClick={closeModal} className=' bg-red-500 w-16 h-16 -translate-y-56 text-white rounded-full font-black'>
                X
            </button>
          </Link>
        </Modal>

        </div>
    </div>
    </div>
  )
}
