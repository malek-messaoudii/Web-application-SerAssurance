import React, { useState, useEffect } from 'react';
import './Add.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tab from './Tabboutique/Tabb'; 
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../Header/Header';
import { useNavigate, useParams } from 'react-router-dom';

function Add() {
 
  const [message, setMessage] = useState('Loading...');
  const navigate =useNavigate()
  const [boutique, setBoutique] = useState({
    idb: '',
    nom: '',
    categorie: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBoutique(prevBoutique => ({
      ...prevBoutique,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Afficher la boîte de dialogue de confirmation avec SweetAlert2
  Swal.fire({
    title: "Voulez-vous ajouter cette boutique ?",
    showDenyButton: true,
    
    confirmButtonText: "Ajouter",
    confirmButtonColor: "#5ed977",
    customClass: {
      confirmButton: 'custom-confirm-button-class' // Classe CSS personnalisée pour le bouton "Enregistrer"
    },
    denyButtonText: "Annuler"
  }).then((result) => {
    if (result.isConfirmed) {
    axios.post('http://localhost:4000/boutique/addboutique', boutique)
      .then(response => {
        Swal.fire("Boutique ajoutée !", "", "success");
        navigate('/Boutiques')

      })
      .catch(error => {
        console.error('Failed to add boutique:', error.response.data);
        Swal.fire("Échec de l'ajout de la boutique", error.response.data.message || 'Erreur inconnue', "error");
     
      });
    }
  });
};
  

 

  useEffect(() => {
    fetch('http://localhost:4000/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        setMessage('Failed to fetch message');
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='add'>
      <Header/>
      <svg className="background--custom" id="demo" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path fill="#6DC0E3" fillOpacity="0.9" d="M-100 -100L200 -100L200 50L-100 50Z" style={{ animation: 'path0 5s linear infinite alternate' }} />
    <path fill="#B6D4F2" fillOpacity="0" d="M-100 -100L200 -100L200 50L-100 50Z" style={{ animation: 'path1 12.820512820512821s linear infinite alternate' }} />
    <path fill="#62A6C2" fillOpacity="0.8" d="M-100 -100L200 -100L200 40L-100 40Z" style={{ animation: 'path2 16.666666666666668s linear infinite alternate' }} />
    </svg>
      <div className='containergestiondonnées'>
      <div className="containerform">
      <div id='m5'>  <a href='/Boutiques' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a></div>  
        <div className="heading">Nouvelle Boutique</div>
        <form className="form" onSubmit={handleSubmit}>
        <input  className="input" type="Number" name="idb"  placeholder="Entrer l'ID du boutique"  value={boutique.idb}
        onChange={handleChange} required/>
        <input  className="input" type="text" name="nom"  placeholder="Entrer le nom du boutique"  value={boutique.nom}
        onChange={handleChange}/>
        <select className="input" name="categorie" value={boutique.categorie} onChange={handleChange} required>
  <option value="">Choisir une catégorie</option>
  <option value="ordinateur">ordinateur</option>
  <option value="smartphone">smartphone</option>
  <option value="electromenager">electromenager</option>
</select>

          <div className='but'>
            <input className="valid-button" type="submit" value="Valider" />
          </div>
        </form>
      </div>
      
      
      </div>
    </div>
  );
}

export default Add;