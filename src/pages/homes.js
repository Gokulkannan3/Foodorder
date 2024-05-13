import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navi';
import coffee from '../images/coffee.png';
import pasta from '../images/pasta.png';
import rosemilk from '../images/rosemilk.png';
import './home.css';
import { Link } from 'react-router-dom';
import cc from '../images/cc.png';
import rr from '../images/rr.jpg';
import './menu.css';
import { useNavigate } from 'react-router-dom';
import insta from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import mail from '../images/envelope.png';
import Chart from 'chart.js/auto';

export default function Homes() {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [pastaCount, setPastaCount] = useState(0);
  const [rosemilkCount, setRosemilkCount] = useState(0);
  const [brownieCount, setBrownieCount] = useState(0);
  const [cakeCount, setCakeCount] = useState(0);
  const chartInstance = useRef(null);

  const handleClick = () => {
    navigate('/menu');
  };

  useEffect(() => {
    fetch('https://fback-vteb.onrender.com/countcoffee')
      .then(res => res.json())
      .then(data => {
        setCoffeeCount(data.totalCoffee);
      })
      .catch(error => console.error('Error fetching coffee count:', error));

    fetch('https://fback-vteb.onrender.com/countpasta')
      .then(res => res.json())
      .then(data => {
        setPastaCount(data.totalPasta);
      })
      .catch(error => console.error('Error fetching pasta count:', error));
      fetch('https://fback-vteb.onrender.com/countrosemilk')
      .then(res => res.json())
      .then(data => {
        setRosemilkCount(data.totalRosemilk);
      })
      .catch(error => console.error('Error fetching rosemilk count:', error));

    fetch('https://fback-vteb.onrender.com/countbrownie')
      .then(res => res.json())
      .then(data => {
        setBrownieCount(data.totalBrownie);
      })
      .catch(error => console.error('Error fetching brownie count:', error));
      
    fetch('https://fback-vteb.onrender.com/countcake')
      .then(res => res.json())
      .then(data => {
        setCakeCount(data.totalCake);
      })
      .catch(error => console.error('Error fetching cake count:', error));
  }, []);

  const renderChart = () => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Coffee', 'Pasta', 'Rose Milk', 'Brownie', 'Cake'],
        datasets: [
          {
            label: 'Maximum Orders',
            backgroundColor: ['#FF6384', 'green', 'yellow', 'gray', 'blue'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [coffeeCount, pastaCount, rosemilkCount, brownieCount, cakeCount]
          }
        ]
      },
      options: {
        maintainAspectRatio: false
      }
    });
  };
  
  useEffect(() => {
    renderChart();
  }, [renderChart]);

  return (
    <div>
      <Navbar/>
      <div className="carousel w-full bg-red-300 h-96">
        <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
          <img src={coffee} alt='coffee' className="coffee w-96 h-96"/>
          <p className='text-blue-900 font-bold text-7xl font-serif flex justify-center items-center gap-8'>How About <p className='text-amber-950'>Coffee Breaks!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item bg-amber-600 relative w-full flex justify-center items-center">
          <img alt='pasta' src={pasta} className="pasta w-96 h-96" />
          <p className='text-white font-bold text-7xl font-serif flex justify-center items-center gap-8'>Taste our <p className='text-black'>Yummy pastas!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="bg-sky-800 carousel-item relative w-full flex justify-center items-center">
          <img alt='rosemilk' src={rosemilk} className="rosemilk w-96 h-96" />
          <p className='text-white font-bold text-7xl font-serif flex justify-center items-center gap-8'>Rosemilk Vangi <p className='text-red-400'>Tharaen Da!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className='car flex justify-center items-center mt-10 gap-10 mb-10'>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='cc' src={cc} alt="cc"/></figure>
          <div className="card-body">
            <h2 className="card-title">Coffee!</h2>
            <p>Feelig tired ? Have some coffeee</p>
            <div className="card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500' onClick={handleClick}>
                Order Here
              </button>  
            </div>
          </div>
        </div>
        <div>
          <Link to='/menu'>
            <button className="btn text-xl mb-2  h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black">Menu</button>
          </Link>
        </div>
        <div className="rose card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img src={rr} className='rr' alt="rr" /></figure>
          <div className="card-body">
            <h2 className="card-title">Rose Milk!</h2>
            <p>Get chilled with some Rose Milk!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500' onClick={handleClick}>
                Order Here
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='p-4 w-88 border-2 border-black rounded-lg mb-10'>
          <canvas ref={chartRef} />
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
  )
}
