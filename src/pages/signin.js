import React from 'react'
import Snav from '../components/snav'
import { useState } from 'react';
import Axios from 'axios';
import Modal from 'react-modal';
import Lottie from 'lottie-react';
import Animation from './animation.json'
import { Link } from 'react-router-dom';
import './signin.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Signin() {

  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [contact,setContact]=useState('');
  const [address,setAddress]=useState('');
  const [dob, setDateOfBirth] = useState('');
  const [email,setEmail]=useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userName,setUserName] = useState('');
  const [validationMessage,setValidationMessage]=useState(false);

  const addUser = (e) => {
    e.preventDefault(); 
    if (!firstname || !lastname || !contact || !email || !dob || !address || !userName || !password || !cpassword) {
      setValidationMessage("Please fill in all details");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{8,}$/;
      if (!/^[A-Z]/.test(password)) {
        setValidationMessage("Password must start with a capital letter");
        return false;
      }
    
      if (!/\d/.test(password)) {
        setValidationMessage("Password must contain at least one digit");
        return false;
      }

      if (password.length !== 9) {
        setValidationMessage("Password must have a maximum length of 8");
        return false;
      }
    
      if (!/[@#]/.test(password)) {
        setValidationMessage("Password must contain at least one of the special characters @ or # or ^ or * etc");
        return false;
      }
    
      if (!passwordRegex.test(password)) {
        setValidationMessage("Password must have: \n- The first letter as a capital letter\n- At least one digit\n- At least one of the special characters @ or # or ^ or * etc\n- Minimum 8 characters in total");
        return false;
      }
    
    if (!email.endsWith('@gmail.com')) {
      setValidationMessage("Invalid email format. Please use @gmail.com");
      return;
    }
    if (password !== cpassword) {
      setValidationMessage("Password and Confirm Password do not match");
      return;
    }
    Axios.post(`https://fback-vteb.onrender.com/register`, {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      email:email,
      dob:dob,
      address: address,
      age: age,
      username: userName,
      password:password,
      cpassword:cpassword,
    })
      .then(() => {
        console.log("Success");
        setModalIsOpen(true);
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

  const handleDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
    const birthDate = new Date(e.target.value);
    const currentDate = new Date();
    const userAge = currentDate.getFullYear() - birthDate.getFullYear();
    

    setAge(userAge);
  }

  return (
    <div>
      <Snav/>
      <div className='flex justify-end mt-8'>
        {validationMessage && (
          <>
            <Stack className='relative'>
              <Alert severity="warning" onClose={() => setValidationMessage("")}>
                {validationMessage}
              </Alert>
            </Stack>
            {window.scrollTo({ top: 0, behavior: 'smooth' })}
          </>
        )}
      </div>
      <div class="border-b border-gray-900/10 p-5 flex justify-center items-center">
      <form>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input type="text" onChange={(e)=>{setFirstname(e.target.value);}} name="first-name" id="first-name" maxLength={20} autocomplete="given-name" class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" onChange={(e)=>{setLastname(e.target.value);}} name="last-name" id="last-name" maxLength={20} autocomplete="family-name" class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" onChange={(e)=>{setEmail(e.target.value);}} autocomplete="email" maxLength={30} class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
            <div class="mt-2">
              <input id="email" name="email" type="tel" onChange={(e)=>{setContact(e.target.value);}} autocomplete="email" maxLength={30} class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
            <div class="mt-2">
              <input id="date" onChange={handleDateOfBirth} name="date" type="date" class="input input-bordered block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Age</label>
            <div class="mt-2">
            {age && <p>{age}</p>}
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Home Address</label>
            <div class="mt-2">
              <textarea type="text" name="street-address" onChange={(e)=>{setAddress(e.target.value);}} maxLength={200} id="street-address" autocomplete="street-address" class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">User ID</label>
            <div class="mt-2">
              <input type="text" onChange={(e)=>{setUserName(e.target.value);}} name="first-name" id="first-name" maxLength={20} autocomplete="given-name" class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
        </div>
       <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-2">
              <input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} autocomplete="email" maxLength={9} class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
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
              <input type={showConfirmPassword ? 'text' : 'password'} onChange={(e) => setCpassword(e.target.value)} autocomplete="email" maxLength={9} class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"/>
              <button
                type="button"
                className="ml-2 focus:outline-none"
                onClick={handleToggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        <div className='flex justify-center mt-5'>
          <button className='btn bg-red-500 mb-20 font-bold text-xl text-white hover:bg-red-400 hover:text-black' type='submit' onClick={addUser}>Submit</button>
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
            <div className='lot flex justify-center items-center content-center h-96 w-96 bg-white p-4 rounded-md'>
              <Lottie
                animationData={Animation}
                loop={false}
                autoplay={true}
                className="lot"
                style={{ width: 400, height: 400, flex:1,justifyContent:'center', alignItems:'center'}}
              />
              
            </div>
            <Link to='/login'>
              <button onClick={closeModal} className='close bg-red-500 w-16 h-16 -translate-y-56 text-white rounded-full font-black'>
                  X
              </button>
            </Link>
          </Modal>
        </div>
    </div>
    </div>
  )
}