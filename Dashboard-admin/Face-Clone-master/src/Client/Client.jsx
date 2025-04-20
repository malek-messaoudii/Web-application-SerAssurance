import React from 'react';
import './Client.css';
import Header from '../Header/Header';
import BleftRow from '../Body/BleftRow';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Tabclient from './Tabclient/Tabclient';

function Client() {
  return (
    <div>
      <Header />
      <div className='bleft'>
        <div className='bleftMenu'>
          <br />
          <BleftRow Icon={DashboardIcon} name="Dashboard" href="/Body" />
          <BleftRow Icon={ShoppingCartIcon} name="Boutiques" href="/Boutiques" />
          <BleftRow Icon={BuildCircleIcon} name="Entreprises de réparation" href="/Réparation" />
          <BleftRow Icon={AssuredWorkloadIcon} name="Entreprises d'assurance" href="/Assurance" />
          <BleftRow Icon={LocalPoliceIcon} name="Agents de police" href="/Police" />
          <div id='d1'>
            <BleftRow Icon={GroupsIcon} name="Utilisateurs" href="/Users" />
          </div>
          <BleftRow Icon={ExpandMoreIcon} name="See more" href="" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div id='tab' className='tab'>
        <Tabclient />
      </div>

      <div id='btn1' className='btn3'>
        <a href='/AddC'><button className='btn1'>Ajouter un utilisateur</button></a>
      </div>
    </div>
  );
}

export default Client;
