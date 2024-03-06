import React from 'react';
import Nav from '../components/anav'
import { useState,useEffect } from 'react';
import Axios from 'axios';

export default function Admin() {
  const [order,setOrder] =useState([]);

  const getOrder = () => {
    Axios.get(`https://fback-vteb.onrender.com/order`)
      .then((response) => {
        setOrder(response.data);
      })
      .catch(() => {
        console.error();
      });
  };
const updateStatus = (id) => {
    const statusCycle = ['Preparing food', 'Picked up', 'Out for delivery', 'Delivered'];
    const orderIndex = order.findIndex((o) => o.id === id);

    if (orderIndex !== -1) {
        Axios.put(`https://fback-vteb.onrender.com/updateStatus/${id}`, {
            newStatus: statusCycle[(statusCycle.indexOf(order[orderIndex].status) + 1) % statusCycle.length],
        })
        .then((response) => {
            console.log(response.data);
            getOrder();
        })
        .catch((error) => {
            console.error(error);
        });
    }
};

  
  

useEffect(() => {
  getOrder();
  const intervalId = setInterval(() => {
      getOrder();
  }, 1000);
  return () => clearInterval(intervalId);
}, []);

  return (
    <div>
        <Nav/>
        <div>
        <div className='flex justify-center items-center p-20'>
          <table className="table table-zebra text-lg font-normal">
            <thead>
              <tr className='bg-red-400 text-lg font-black text-black'>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Coffee</th>
                <th>Rosemilk</th>
                <th>Pasta</th>
                <th>Brownie</th>
                <th>Cake</th>
                <th>Amount</th>
                <th>Update</th>
                <th>Status</th>
              </tr>
            </thead>
            {order.length > 0 && (
              <tbody>
                {order.map((val, key) => (
                  <tr key={key} className='mt-5 font-semibold'>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.contact}</td>
                    <td>{val.address}</td>
                    <td>{val.coffee}</td>
                    <td>{val.rosemilk}</td>
                    <td>{val.pasta}</td>
                    <td>{val.brownie}</td>
                    <td>{val.cake}</td>
                    <td>Rs.{val.totalAmount}</td>
                    <td><button
                        onClick={() => updateStatus(val.id)}
                        className='text-white font-bold text-xl h-12 w-24 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black'
                    >Update</button></td>
                    <td>{val.status}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        </div>
    </div>
  )
}
