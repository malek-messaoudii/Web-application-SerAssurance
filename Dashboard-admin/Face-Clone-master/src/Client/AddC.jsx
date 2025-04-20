import React, { useState, useEffect } from 'react';
import './AddC.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function AddC() {
  const [message, setMessage] = useState('Loading...');
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nom: '',
    prénom:'',
    numérotel:'',
    email:'',
    cin:'',
    mdp:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Voulez-vous ajouter cet utilisateur?",
      showDenyButton: true,
      confirmButtonText: "Ajouter",
      confirmButtonColor: "#5ed977",
      customClass: {
        confirmButton: 'custom-confirm-button-class'
      },
      denyButtonText: "Annuler"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('http://localhost:4000/user/add', user)
          .then(response => {
            Swal.fire("Utilisateur ajouté!", "", "success");
            navigate('/Users');
          })
          .catch(error => {
            Swal.fire("Échec de l'ajout de l'utilisateur", error.response.data.message || 'Erreur inconnue', "error");
            console.error('Failed to add user:', error.response.data);
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
      <Header />
      <svg className="background--custom" id="demo" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path fill="#6DC0E3" fillOpacity="0.9" d="M-100 -100L200 -100L200 50L-100 50Z" style={{ animation: 'path0 5s linear infinite alternate' }} />
        <path fill="#B6D4F2" fillOpacity="0" d="M-100 -100L200 -100L200 50L-100 50Z" style={{ animation: 'path1 12.820512820512821s linear infinite alternate' }} />
        <path fill="#62A6C2" fillOpacity="0.8" d="M-100 -100L200 -100L200 40L-100 40Z" style={{ animation: 'path2 16.666666666666668s linear infinite alternate' }} />
      </svg>
      <div className='containergestiondonnées'>
        <div className="containerform">
          <div id='m5'>
            <a href='/Users' id='a5'>
              <div className='m4' id='a4'><ArrowBackIcon /></div>
            </a>
          </div>
          <div className="heading">Nouvel utilisateur</div>
          <form className="form" onSubmit={handleSubmit}>
            <input className="input" type="text" name="nom" placeholder="Nom" value={user.nom} onChange={handleChange} required />
            <input className="input" type="text" name="prénom" placeholder="Prénom" value={user.prénom} onChange={handleChange} required />
            <input className="input" type="text" name="numérotel" placeholder="Numéro de téléphone" value={user.numérotel} onChange={handleChange} />
            <input className="input" type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
            <input className="input" type="text" name="cin" placeholder="CIN" value={user.cin} onChange={handleChange} />
            <input className="input" type="password" name="mdp" placeholder="Mot de passe" value={user.mdp} onChange={handleChange} />
            <div className='but'>
              <input className="valid-button" type="submit" value="Valider" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddC;
