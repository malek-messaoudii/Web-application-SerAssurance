import React from 'react'
import './Boutiques.css'
import Header from '../Header/Header'
import BleftRow from '../Body/BleftRow'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Add from './Add';
import Tabb from './Tabboutique/Tabb'


function Boutiques() {
  return (
    <div>
        <Header/>
        <div className='bleft'>
        <div className='bleftMenu' >
        <br/>
          <BleftRow Icon={DashboardIcon} name="Dashboard" href="/Body"/>
          <div id='d1'>
        <BleftRow Icon={ShoppingCartIcon} name="Boutiques" href="/Boutiques"/> </div>
        <BleftRow Icon={BuildCircleIcon} name="Entreprises de réparation" href="/Réparation" />
        <BleftRow Icon={AssuredWorkloadIcon} name="Entreprises d'assurance" href="/Assurance"/>
        <BleftRow Icon={LocalPoliceIcon} name="Agents de police" href="/Police"/>
        <BleftRow Icon={GroupsIcon} name="Utilisateurs" href="/Users" />
        <BleftRow Icon={ExpandMoreIcon} name="See more" href=""/>
    </div>
    </div>
    <br/>
    <br/>
    <br/>

    <div id='tab'>
    <Tabb/>
    </div>
    <div id='btn1'>
    <a href='/Add'><button className='btn1'> Ajouter un boutique </button></a>
    </div>

    </div>
    
  )
}

export default Boutiques