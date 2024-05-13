import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navi';
import innumvai from '../images/quote.jpg';
import './track.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import tick from '../images/checkmark.png';

export default function Track() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`https://fback-vteb.onrender.com/track/${id}`);
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };
    fetchOrderDetails();
    const intervalId = setInterval(fetchOrderDetails, 1000);
    return () => clearInterval(intervalId);
  }, [id]);

  const labels = ['Booked', 'Preparing food', 'Picked up', 'Out for delivery', 'Delivered'];
  const labelsSt = ['Booked', 'Preparing', 'Picked', 'Reaching', 'Delivered'];
  let st = labels[0];

  if (orderDetails.status === "Booked") st = labels[0];
  else if (orderDetails.status === "Preparing food") st = labels[1];
  else if (orderDetails.status === "Picked up") st = labels[2];
  else if (orderDetails.status === "Out for delivery") st = labels[3];
  else if (orderDetails.status === "Delivered") st = labels[4];

  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-20'>
        <div className="co card card-side bg-red-200 shadow-xl w-1/2">
          <figure className='w-1/2 fi'><img className='ime' src={innumvai} alt="Movie" /></figure>
          <div className="card-body flex justify-center">
            <h2 className="card-title font-extrabold">Order Details</h2>
            <p>Order Id : {orderDetails.id}</p>
            <p>Username : {orderDetails.username}</p>
            <p>Status : {orderDetails.status}</p>
            <p className='font-bold'>Total Amount : {orderDetails.totalAmount}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center -ml-12'>
      <div className='ProgressBar mt-20'>
        <ProgressBar
          percent={labels.indexOf(st) * (100 / (labels.length-1))}
          filledBackground="linear-gradient(to right, #000000, #000000)"
          height="5px"
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <Step key={labels[index]} transition="scale">
              {({ accomplished }) => (
                <p className='absolute text font-bold text-green-600' style={{ filter: `grayscale(${accomplished ? 0 : 120}%)` }}>{labelsSt[index]}
                  <div className='tick flex justify-center relative'>
                    <img
                      className='tic'
                      key={labels[index]}
                      style={{ filter: `grayscale(${accomplished ? 0 : 120}%)` }}
                      src={tick}
                      alt='tick'
                      width="50"
                    />
                  </div>
                </p>
              )}
            </Step>
          ))}
        </ProgressBar>
      </div>
      </div>
    </div>
  );
}
