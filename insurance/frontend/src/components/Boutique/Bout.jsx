import React from 'react'
import Rec from '.././assets/rec.jpg'
import Footer from '../Footer/Footer'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import { Avatar, IconButton } from '@mui/material';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Pol() {
  return (
  <div>
     <CustomNavbar userRole='agentassurance' />
     <div className="circle-container">
      <span className="message">Contactez le client  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>
      <div className='div1'>
        <h1 className='title2'> Boutique </h1>
        </div>
        <div>
          <h3 id='titre' className='tit'> 
Dans cet espace, les fonctionnalités sont différenciées pour l'agent de boutique, qui peut gérer ses produits, et pour l'utilisateur, qui peut soumettre une demande d'assurance. </h3>
        </div>
        <div className='imm'>
        <img alt="" src={Rec} width="300" height="300" className="vol" />
        </div>
        <Footer/>
    </div>

  )
}

export default Pol