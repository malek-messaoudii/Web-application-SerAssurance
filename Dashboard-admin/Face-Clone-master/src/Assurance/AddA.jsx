import React, { useState, useEffect } from 'react';
import './AddA.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../Header/Header';
import { useNavigate, useParams } from 'react-router-dom';

function AddA() {
 
  const [message, setMessage] = useState('Loading...');
  const navigate =useNavigate()
  const [assurance, setAssurance] = useState({
    idass: '',
    nomagenceassurance: '',
    local: ''
  });

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setAssurance(prevRep => ({
      ...prevRep,
      [name]: value
    }));
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
  Swal.fire({
    title: "Voulez-vous ajouter cette entreprise d'assurance ?",
    showDenyButton: true,
    
    confirmButtonText: "Ajouter",
    confirmButtonColor: "#5ed977",
    customClass: {
      confirmButton: 'custom-confirm-button-class' // Classe CSS personnalisée pour le bouton "Enregistrer"
    },
    denyButtonText: "Annuler"
  }).then((result) => {
    if (result.isConfirmed) {
    axios.post('http://localhost:4000/assurancecompany/addassurancecompany', assurance)
      .then(response => {
        Swal.fire("Entreprise d'assurance ajoutée !", "", "success");
        navigate('/Assurance')
      })
      .catch(error => {
        console.error('Failed to add insurance company:', error.response.data);
        Swal.fire("Échec de l'ajout de l'entreprise d'assurance", error.response.data.message || 'Erreur inconnue', "error");
     
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
      <div id='m5'>  <a href='/Réparation' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a></div>  
        <div className="heading">Nouvelle entreprise d'assurance</div>
        <form className="form" onSubmit={handleSubmit1}>
        <input  className="input" type="text" name="idass"  placeholder="Entrer l'ID de l'entreprise d'assurance"  value={assurance.idass}
        onChange={handleChange1} required/>
        <input  className="input" type="text" name="nomagenceassurance"  placeholder="Entrer le nom de l'entreprise d'assurance"  value={assurance.nomagenceassurance}
        onChange={handleChange1}/>
        <select className="input" name="local" value={assurance.local} onChange={handleChange1} required>
  <option value="">Choisir une localisation</option>
  <option value="Ariana">Ariana</option>
  <option value="Beja">Béja</option>
  <option value="Ben arous">Ben Arous</option>
  <option value="Bizerte">Bizerte</option>
  <option value="Gabes">Gabès</option>
  <option value="Gafsa">Gafsa</option>
  <option value="Jendouba">Jendouba</option>
  <option value="Kairouan">Kairouan</option>
  <option value="Kasserine">Kasserine</option>
  <option value="Kebili">Kébili</option>
  <option value="Le kef">Le Kef</option>
  <option value="Mahdia">Mahdia</option>
  <option value="Manouba">Manouba</option>
  <option value="Medenine">Médenine</option>
  <option value="Monastir">Monastir</option>
  <option value="Nabeul">Nabeul</option>
  <option value="Sfax">Sfax</option>
  <option value="Sidi bouzid">Sidi Bouzid</option>
  <option value="Siliana">Siliana</option>
  <option value="Sousse">Sousse</option>
  <option value="Tataouine">Tataouine</option>
  <option value="Tozeur">Tozeur</option>
  <option value="Tunis">Tunis</option>
  <option value="Zaghouan">Zaghouan</option>
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

export default AddA;