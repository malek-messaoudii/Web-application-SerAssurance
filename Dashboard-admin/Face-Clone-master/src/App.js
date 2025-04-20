import React, { Component } from 'react';
import './App.css';
import Body from './Body/Body';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'; 
import Boutiques from './Boutiques/Boutiques';
import Editboutique from './Boutiques/Edit';
import Add from './Boutiques/Add';
import Réparation from './Réparation/Réparation'
import EditR from './Réparation/EditR'
import AddR from './Réparation/AddR'
import Assurance from './Assurance/Asuurance'
import EditA from './Assurance/EditA'
import AddA from './Assurance/AddA'
import Users from './Client/Client'
import Editcl from './Client/Editcl'
import AddC from './Client/AddC'
import Compte from './Compte/Compte'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Body" element={<Body/>} />
        <Route path="/Boutiques" element={<Boutiques/>} />
        <Route path="/espaceeditboutique/:idb" element={<Editboutique/>} />
        <Route path="/Add" element={<Add/>} />
        <Route path="/Réparation" element={<Réparation/>} />
        <Route path="/EditR/:idr" element={<EditR/>} />
        <Route path="/AddR" element={<AddR/>} />
        <Route path="/Assurance" element={<Assurance/>} />
        <Route path="/EditA/:idc" element={<EditA/>} />
        <Route path="/AddA" element={<AddA/>} />
        <Route path="/Users" element={<Users/>} />
        <Route path="/Editcl/:idcl" element={<Editcl/>} />
        <Route path="/AddC" element={<AddC/>} />
        <Route path="/Compte" element={<Compte/>} />
      </Routes>
    </Router>
  );
}

export default App;
