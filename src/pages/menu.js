import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navi from '../components/navi';
import cc from '../images/cc.png';
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import pp from '../images/pp.jpg';
import rr from '../images/rr.jpg';
import brownie from '../images/brownie.jpg';
import cake from '../images/cake.jpg';
import './menu.css'
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

export default function Menu() {
  const [cartCounts, setCartCounts] = useState([0, 0, 0, 0, 0, 0]);
  const coffeerate = 10;
  const pastarate = 100;
  const rosemilkrate = 50;
  const brownierate = 120;
  const cakerate = 300;
  const [showAlert,setShowAlert]=useState(false);

  const navigate = useNavigate();

  const handleRemoveFromCart = (index) => {
    if (cartCounts[index] > 0) {
      const newCartCounts = [...cartCounts];
      newCartCounts[index] -= 1;
      setCartCounts(newCartCounts);
    }
  };

  const handleAddToCart = (index) => {
    const newCartCounts = [...cartCounts];
    newCartCounts[index] += 1;
    setCartCounts(newCartCounts);
  };

  const getItemName = (index) => {
    const itemNames = ['Coffee', 'Pasta', 'RoseMilk', 'Brownie', 'Cake', 'RoseMilk'];
    return itemNames[index];
  };

  const getItemRate = (index) => {
    const itemRates = [coffeerate, pastarate, rosemilkrate, brownierate, cakerate, rosemilkrate];
    return itemRates[index];
  };

  const openBookPage = () => {
    const selectedItemsArray = [];
    cartCounts.forEach((count, index) => {
      if (count > 0) {
        selectedItemsArray.push({
          name: getItemName(index),
          count,
          rate: getItemRate(index),
        });
      }
    });
    if (selectedItemsArray.length === 0) {
      setShowAlert(true);
    } else {
      navigate('/book', {
        state: { selectedItems: selectedItemsArray, totalAmount: calculateTotalAmount(selectedItemsArray) },
      });
    }
  };

  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.count * item.rate, 0);
  };  

  return (
    <div>
      <Navi/>
      <div className='flex justify-end mt-10'>
        {showAlert && (
          <>
            <Stack className='relative'>
              <Alert severity="warning" onClose={() => setShowAlert(false)}>
                Please add atleast single item
              </Alert>
            </Stack>
            {window.scrollTo({ top: 0, behavior: 'smooth' })}
            </>
        )}
      </div>
      <div className='car flex justify-center items-center mt-10 gap-10 mb-10'>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='cc' src={cc} alt="cc"/></figure>
          <div className="card-body">
            <h2 className="card-title">Coffee!<p className='flex justify-end text-xl font-bold'>Rs.{coffeerate}</p></h2>
            <p>Feelig tired? Have some coffeee</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='plus cursor-pointer' onClick={()=>handleRemoveFromCart(0)}/>
                <p className='font-black'>{cartCounts[0]}</p>
                <img src={plus} alt='plus' className='minus cursor-pointer' onClick={()=>handleAddToCart(0)}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='pp' src={pp} alt="pp" /></figure>
          <div className="card-body">
            <h2 className="card-title">Pastas!<p className='flex justify-end text-xl font-bold'>Rs.{pastarate}</p></h2>
            <p>Feels hungry? Teste some yummy pastas</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='minus cursor-pointer' onClick={()=>handleRemoveFromCart(1)}/>
                <p className='font-black'>{cartCounts[1]}</p>
                <img src={plus} alt='plus' className='plus cursor-pointer' onClick={()=>handleAddToCart(1)}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img src={rr} className='rr' alt="rr" /></figure>
          <div className="card-body">
            <h2 className="card-title">Rose Milk!<p className='flex justify-end text-xl font-bold'>Rs.{rosemilkrate}</p></h2>
            <p>Get chilled with some Rose Milk!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='minus cursor-pointer' onClick={()=>handleRemoveFromCart(2)}/>
                <p className='font-black'>{cartCounts[2]}</p>
                <img src={plus} alt='plus' className='plus cursor-pointer' onClick={()=>handleAddToCart(2)}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-t border-transparent'></hr>
      <div className='ca flex justify-center items-center mt-10 gap-10 mb-20'>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='cc' src={brownie} alt="cc"/></figure>
          <div className="card-body">
            <h2 className="card-title">Melting Brownie!<p className='flex justify-end text-xl font-bold'>Rs.{brownierate}</p></h2>
            <p>Get melted with yummie brownies!!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='plus cursor-pointer' onClick={()=>handleRemoveFromCart(3)}/>
                <p className='font-black'>{cartCounts[3]}</p>
                <img src={plus} alt='plus' className='minus cursor-pointer' onClick={()=>handleAddToCart(3)}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
        <figure><img className='cake w-full' src={cake} alt="pp" /></figure>
          <div className="card-body">
            <h2 className="card-title">Vegan Cake!<p className='flex justify-end text-xl font-bold'>Rs.{cakerate}</p></h2>
            <p>Are you a vegan?Try out this delicious Vegan Cake!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='minus cursor-pointer' onClick={()=>handleRemoveFromCart(4)}/>
                <p className='font-black'>{cartCounts[4]}</p>
                <img src={plus} alt='plus' className='plus cursor-pointer' onClick={()=>handleAddToCart(4)}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
        <figure><img src={rr} className='rr' alt="rr" /></figure>
          <div className="card-body">
            <h2 className="card-title">Rose Milk!<p className='flex justify-end text-xl font-bold'>Rs.{rosemilkrate}</p></h2>
            <p>Get chilled with some Rose Milk!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='minus cursor-pointer' onClick={()=>handleRemoveFromCart(5)}/>
                <p className='font-black'>{cartCounts[5]}</p>
                <img src={plus} alt='plus' className='plus cursor-pointer' onClick={()=>handleAddToCart(5)}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-5 mb-44'>
        <button onClick={openBookPage} className='btn btn-success'>
          Place Order
        </button>
      </div>
    </div>
  )
}
