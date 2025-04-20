import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, IconButton} from '@mui/material';
import Navbar from 'react-bootstrap/Navbar';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import logoser from '../assetes/logoser.png'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';



function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <Navbar.Brand href="/Body">
            <img alt="" src={logoser} width="60" height="55" className="logo" />
            </Navbar.Brand>
            <div className='header__input'>
                <SearchIcon/>
                <input type='text' placeholder='Rechercher' />
            </div>
        </div>
        
        <div className='header__right'>
          <div id='dv'>
          <IconButton>
            <AppsIcon/>
          </IconButton>
          </div>
          <div id='dv'>
          <IconButton>
            <DataSaverOffIcon/>
          </IconButton>
          </div>
          <div id='dv'>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          </div>
          <div id='dv'>
          <IconButton href="/Compte" >
          <Avatar/>
          </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Header