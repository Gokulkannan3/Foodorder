import React, { useState,useEffect } from "react";
import innum from '../images/innum.png'
import './navi.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import menu from '../images/menu.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText } from "@mui/material";

export default function Navbar(){
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const [state, setState] = React.useState({
      bottom: false
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem disablePadding style={{ marginRight: '10px' }}>
              <ListItemButton>
                  <Link to='/pro'>
                      {userData && userData.firstname && (
                        <ListItemText className="text-xl">{userData.username}</ListItemText>
                      )}
                  </Link>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{ marginRight: '10px' }}>
              <ListItemButton>
                  <Link to='/menu'>
                        <ListItemText className="text-xl">Menu</ListItemText>
                  </Link>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{ marginRight: '10px' }}>
              <ListItemButton>
                  {userData ? (
                      <ListItemText className='font-bold text-lg' onClick={handleLogout}>
                          Logout
                      </ListItemText>
                  ) : (
                      <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <ListItemText className='font-bold text-xl'>
                              Login
                          </ListItemText>
                      </Link>
                  )}
              </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        } else {
          axios.get("http://localhost:8080/isAuth", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            }
          })
            .then((response) => {
              console.log(response.data);
    
              if (response.data.result && response.data.result.length > 0) {
                const userData = response.data.result[0];
                setUserData(userData);
                localStorage.setItem("userData", JSON.stringify(userData));
              } else {
                console.error('No user details found in the response');
              }
            })
            .catch((error) => {
              console.error('An unexpected error occurred:', error.message);
            });
        }
      }, []);

      const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        setUserData(null);
        navigate('/');
      };

    return (
        <nav className='out bg-black h-32'>
            <div className="flex justify-start translate-y-3 translate-x-5">
                <img src={innum} alt="innum" className="w-24"/>
            </div>
            <div className="head font-normal text-white translate-x-36 -translate-y-16 text-xl">
                <p>Innum Vai!!!</p>
                <p>Happy Tummy Ahead!!!</p>
            </div>
            <div className="flex justify-end -translate-y-28">
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} className="w-8">
                                <img className='men w-8 ' alt="menu" src={menu} />
                        </Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor, userData)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
}