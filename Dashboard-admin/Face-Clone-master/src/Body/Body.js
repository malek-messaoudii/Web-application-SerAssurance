import React from 'react'
import './Body.css'
import Bleft from './Bleft'
import Header from '../Header/Header'
import Tabboutique from '../Boutiques/Tabboutique/Tabb'
import TabR from '../Réparation/TabRéparation/TabR'
import TabC from '../Client/Tabclient/Tabclient'
import TabA from '../Assurance/TabAssurance/Tabassurance'

function Body() {
  return (
    <div className='body'>
        <Header/>
        <Bleft/>
        <div className='table'>
          <h2 className='titrage'>VOS BOUTIQUES</h2>
        <Tabboutique/>
        <br/>
        <br/>
        <h2 className='titrage'>VOS ENTREPRISES DE REPARATION</h2>
        <TabR/>
        <br/>
        <br/>
        <h2 className='titrage'>VOS CLIENTS</h2>
        <TabC/>
        <br/>
        <br/>
        <h2 className='titrage'>VOS ENTREPRISES D'ASSURANCE</h2>
        <TabA/>
        <br/>
        </div>
        <div className='table1'>
        </div>
    </div>
  )
}

export default Body