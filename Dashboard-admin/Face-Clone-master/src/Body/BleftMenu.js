import React from 'react'
import BleftRow from './BleftRow'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';

function BleftMenu() {
    return (
    <div className='bleftMenu'>
      <br/>
      <div id='d1'> <BleftRow Icon={DashboardIcon} name="Dashboard" href="/Body"/> </div>
        <BleftRow Icon={ShoppingCartIcon} name="Boutiques" href="/Boutiques"/>
        <BleftRow Icon={BuildCircleIcon} name="Entreprises de réparation" href="/Réparation" />
        <BleftRow Icon={AssuredWorkloadIcon} name="Entreprises d'assurance" href="/Assurance"/>
        <BleftRow Icon={LocalPoliceIcon} name="Agents de police" href="/Police"/>
        <BleftRow Icon={GroupsIcon} name="Utilisateurs" href="/Users" />
        <BleftRow Icon={ExpandMoreIcon} name="See more" href=""/>
    </div>
  )
}

export default BleftMenu