import React from 'react'
import './Compte.css'
import Header from '../Header/Header'
import BleftRow from '../Body/BleftRow'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Compte() {
  return (
    <div>
        <Header/>
        <div className='bleft'>
        <div className='bleftMenu'>
      <br/>
      <div id='d1'>  <BleftRow Icon={AccountTreeIcon} name="Mes projets" href="/Compte" /> </div>
        <BleftRow Icon={AccountCircleIcon} name="Gestion du compte" href="#"/>
</div>
</div>
<div className='table5'>
<table>
  <thead>
    <tr>
      <th>Nom du projet</th>
      <th>Date début</th>
      <th>Date fin</th>
      <th>Collaborateurs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Application web d'assurance</td>
      <td>01/03/2024</td>
      <td>25/05/2024</td>
      <td>--------, -------</td>
    </tr>
  </tbody>
</table>

</div>
<div id='p7'>
<button className='p7'>Ajouter un projet</button>
</div>

    </div>
  )
}

export default Compte