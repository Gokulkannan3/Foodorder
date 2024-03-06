import React from "react";
import innum from '../images/innum.png'
import '../App.css'
import { Link } from "react-router-dom";
import './lnav.css';
import menu from '../images/menu.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Lnav() {
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
            {['Home','Signup'].map((text, index) => (
              <ListItem key={text} disablePadding style={{ marginRight: '10px' }}>
                <ListItemButton>
                  <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                    <ListItemText primary={text}></ListItemText>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <nav className='out bg-black h-32'>
            <div className="flex justify-start translate-y-3 translate-x-5">
                <img src={innum} alt="innum" className="w-24" />
            </div>
            <div className="head font-bold text-white translate-x-36 -translate-y-16 text-2xl">
                <p>Innum Vai!!!</p>
                <p>Happy Tummy Ahead!!!</p>
            </div>
            <div className="flex justify-end -translate-y-28">
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} className="w-8">
                                <img className='men w-8' alt="menu" src={menu} />
                        </Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </nav>
    )
}
