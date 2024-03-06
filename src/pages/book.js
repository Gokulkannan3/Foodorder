import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import Lottie from 'lottie-react';
import Animation from './animation.json'
import Navbar from '../components/navi';
import './book.css'
import plus from '../images/plus.png';
import minus from '../images/minus.png';

export default function Book() {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalAmount } = location.state || {};
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(location.state.selectedItems || []);
  const [updatedTotalAmount, setUpdatedTotalAmount] = useState(totalAmount)

  const placeOrder = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('userData'));
  
      if (!userData) {
        console.error('User details not available');
        return;
      }
  
      const orderDetails = {
        username: userData.username,
        address: userData.address,
        contact: userData.contact,
        totalAmount: updatedTotalAmount,
        coffee: 0,
        pasta: 1,
        rosemilk: 0,
        brownie: 0,
        cake: 0,
      };
  
      selectedItems.forEach((item) => {
        orderDetails[`${item.name.toLowerCase()}`] = item.count;
      });
  
      const response = await axios.post('https://fback-vteb.onrender.com/order', orderDetails);
  
      if (response.status === 200) {
        console.log('Order placed successfully!');
        axios.get(`https://fback-vteb.onrender.com/order?username=${userData.username}`)
          .then((res) => {
            const latestOrder = res.data[res.data.length - 1];
            const orderId = latestOrder.id;
            navigate(`/track/${orderId}`);
          })
          .catch(() => {
            console.error('Failed to fetch latest order');
          });
      } else {
        alert('Order Failed');
        console.error('Order failed:', response.statusText);
      }
    } catch (error) {
      console.error('Order failed:', error.message);
    }
  };
  

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleReduceQuantity = (itemName) => {
    setSelectedItems((prevItems) => {
      let updatedTotal = 0;

      const updatedItems = prevItems.map((item) => {
        if (item.name === itemName && item.count > 0) {
          updatedTotal += (item.count - 1) * item.rate;
          return { ...item, count: item.count - 1 };
        }
        updatedTotal += item.count * item.rate;
        return item;
      });

      setUpdatedTotalAmount(updatedTotal);
      return updatedItems;
    });
  };

  const handleIncreaseQuantity = (itemName) => {
    setSelectedItems((prevItems) => {
      let updatedTotal = 0;

      const updatedItems = prevItems.map((item) => {
        if (item.name === itemName && item.count > 0) {
          updatedTotal += (item.count + 1) * item.rate;
          return { ...item, count: item.count + 1 };
        }
        updatedTotal += item.count * item.rate;
        return item;
      });

      setUpdatedTotalAmount(updatedTotal);
      return updatedItems;
    });
  };


  return (
    <div>
      <Navbar />
      <div>
        <div className='flex justify-center'>
          <h3 className='mt-10 font-extrabold text-2xl mb-8'>Order Details:</h3>
        </div>
        <div className='flex justify-center'>
          <div className="w-auto  h-auto shadow-2xl shadow-red-400">
            <table className="table table-zebra text-lg font-normal">
              <thead className='bg-red-400 text-2xl font-bold text-black'>
                <th>Items</th>
                <th>Quantity</th>
                <th>Rate</th>
              </thead>
              {selectedItems.length > 0 && (
                <tbody>
                  {selectedItems.map((val, key) => (
                    <tr key={key} className='mt-5 font-semibold'>
                      <td>{val.name}</td>
                      <td>
                      <button
                          className='i cursor-pointer mr-3 translate-y-1'
                          onClick={() => handleIncreaseQuantity(val.name)}
                        >
                          <img src={plus} alt="img"/>
                        </button>
                        <span className='mr-3'>{val.count}</span>
                        <button
                          className='i cursor-pointer translate-y-1'
                          onClick={() => handleReduceQuantity(val.name)}
                        >
                          <img src={minus} alt='minus' />
                        </button>
                      </td>
                      <td>{val.count * val.rate}</td>
                    </tr>
                  ))}
                  <tr>
                  <td colSpan='6' className='text-center text-xl font-semibold'>Total: {updatedTotalAmount}</td>
                  </tr>
                </tbody>
              )}
            </table>
            <div className="bu card-actions mt-2 flex justify-center ">
              <button className='btn flex bg-red-500 hover:bg-red-500 mb-2 text-white font-bold hover:text-black text-lg' onClick={placeOrder}>
                Book Now
              </button>
            </div>
          </div>
        </div>
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
            <Link to='/home'>
              <button onClick={closeModal} className='close bg-red-500 w-16 h-16 -translate-y-56 text-white rounded-full font-black'>
                  X
              </button>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  );
};