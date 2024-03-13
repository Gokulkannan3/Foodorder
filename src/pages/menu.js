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
import Modal from '@mui/material/Modal';
import Modalth from '@mui/material/Modal';
import Modalo from '@mui/material/Modal';
import Modalt from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Menu() {
  const [cartCounts, setCartCounts] = useState([0, 0, 0, 0, 0, 0]);
  const coffeerate = 10;
  const pastarate = 100;
  const rosemilkrate = 50;
  const brownierate = 120;
  const cakerate = 300;
  const [showAlert,setShowAlert]=useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openo, setOpeno] = useState(false);
  const handleOpeno = () => setOpeno(true);
  const handleCloseo = () => setOpeno(false);
  const [opent, setOpent] = useState(false);
  const handleOpent = () => setOpent(true);
  const handleCloset = () => setOpent(false);
  const [openth, setOpenth] = useState(false);
  const handleOpenth = () => setOpenth(true);
  const handleCloseth = () => setOpenth(false);

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='font-4xl text-green-700' variant="h6" component="h2">
            Healthy Fact about coffee
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-xl text-black'>
            Coffee gets its kick from caffeine, a natural stimulant that makes you feel more energetic.
          </Typography>
          <div className='flex justify-end mt-2'>
            <Button variant="outlined" onClick={handleOpeno}>Ingredients</Button>
          </div>
        </Box>
      </Modal>
      <Modalth
        open={openth}
        onClose={handleCloseth}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='font-4xl text-green-700' variant="h6" component="h2">
            Healthy Fact about pasta
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-xl text-black'>
            Pasta is made from grain, one of the basic food groups in a healthy diet that also can include vegetables, fruits, fish, and poultry. It’s a good source of energy and can give you fiber, too, if it’s made from whole grain. That can help with stomach problems and may help lower cholesterol. Try some tagliatelle with wild mushrooms and truffle oil.
          </Typography>
          <div className='flex justify-end mt-2'>
            <Button variant="outlined" onClick={handleOpent}>Ingredients</Button>
          </div>
        </Box>
      </Modalth>
      <Modalt
        open={opent}
        onClose={handleCloset}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='h-3/1'>
        <div className='flex justify-center items-center'>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className='bg-black text-white'>
                <tr>
                  <th>Ingredient</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>221</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>1.3g</td>
                </tr>
                <tr>
                  <td>Sodium </td>
                  <td>1mg</td>
                </tr>
                <tr>
                  <td>Carbohydrates</td>
                  <td>43.2g</td>
                </tr>
                <tr>
                  <td>Fiber</td>
                  <td>2.5g</td>
                </tr>
                <tr>
                  <td>Sugars</td>
                  <td>0.8g</td>
                </tr>
                <tr>
                  <td>Sugars</td>
                  <td>0.8g</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>8.1g</td>
                </tr>
                <tr>
                  <td>Iron</td>
                  <td>1.01mg</td>
                </tr>
                <tr>
                  <td>Folate</td>
                  <td>115mcg</td>
                </tr>
                <tr>
                  <td>Thiamin</td>
                  <td>0.42mcg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
        </Box>
      </Modalt>
      <Modalo
        open={openo}
        onClose={handleCloseo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='h-96'>
        <div className='flex justify-center items-center'>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className='bg-black text-white'>
                <tr>
                  <th>Ingredient</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Carbohydrates</td>
                  <td>24% </td>
                </tr>
                <tr>
                  <td>Fats and Lipids</td>
                  <td>13%</td>
                </tr>
                <tr>
                  <td>Water</td>
                  <td>10-13%</td>
                </tr>
                <tr>
                  <td>Protien</td>
                  <td>9%</td>
                </tr>
                <tr>
                  <td>Minerals</td>
                  <td>4%</td>
                </tr>
                <tr>
                  <td>Caffeine</td>
                  <td>1-2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
        </Box>
      </Modalo>
      <div className='car flex justify-center items-center mt-10 gap-10 mb-10'>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='cc' src={cc} alt="cc" onClick={handleOpen}/></figure>
          <div className="card-body">
            <h2 className="card-title">Coffee!<p className='flex justify-end text-xl font-bold'>Rs.{coffeerate}</p></h2>
            <p>Feelig tired? Have some coffeee</p>
            <div className='translate-y-2'>
              <button variant="outlined" className='w-24 border-2 border-blue-800 rounded-md text-lg text-blue-800' onClick={handleOpen}>Click here</button>
            </div>
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
            <div className='translate-y-2'>
              <button variant="outlined" className='w-24 border-2 border-blue-800 rounded-md text-lg text-blue-800' onClick={handleOpenth}>Click here</button>
            </div>
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
            <div className='translate-y-2'>
              <button variant="outlined" className='w-24 border-2 border-blue-800 rounded-md text-lg text-blue-800' onClick={handleOpen}>Click here</button>
            </div>
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
            <div className='translate-y-2'>
              <button variant="outlined" className='w-24 border-2 border-blue-800 rounded-md text-lg text-blue-800' onClick={handleOpen}>Click here</button>
            </div>
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
            <div className='translate-y-2'>
              <button variant="outlined" className='w-24 border-2 border-blue-800 rounded-md text-lg text-blue-800' onClick={handleOpen}>Click here</button>
            </div>
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
