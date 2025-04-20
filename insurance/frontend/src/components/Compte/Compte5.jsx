import React, { useState, useEffect } from 'react';
import './Compte.css';
import LogoutIcon from '@mui/icons-material/Logout';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from '../Navbar1';

const backendURL = 'http://localhost:4000/user';

function Compte5() {
  const [userData, setUserData] = useState({
    noms: '',
    nomg: '',
    numerotel: '',
    email: '',
    id: ''
  });



  useEffect(() => {
    fetchUserData(); // Appeler la fonction pour récupérer les données de l'utilisateur lorsque le composant se monte
  }, []);

  const fetchUserData = async () => {
    try {

      const email = localStorage.getItem('userEmail'); 
      console.log( "email", email)// Récupérer l'email de l'utilisateur depuis le localStorage
      const response = await fetch(`${backendURL}/getuser/${email}`, { // Utiliser l'email dans l'URL pour obtenir les données de l'utilisateur
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` 
          // Utiliser le jeton JWT pour l'authentification
        }

      });
      if (response.ok) {
        const userDataFromBackend = await response.json();
        setUserData(userDataFromBackend); // Mettre à jour l'état avec les données de l'utilisateur
      } else {
        console.error('Échec de la récupération des données utilisateur');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur:', error);
    }
    console.log('userData:', userData);
  };

  const handleLogout = () => {
    setUserData({
      noms: '',
      nomg: '',
      numérotel: '',
      email: '',
      id: ''
    });
    toast.success("Session terminée");
    localStorage.removeItem('accessToken');
    window.location.href = '/Login';
  };

  return (
    <div>
      <CustomNavbar userRole='agentpolice' />
      <div className='div2'>
        <h1 className='title3'>Tableau de bord</h1>
      </div>
      <div className='rec2'>
        <div id='rec3'>
          <div>
            <a href='/Compte'><button className='button'>Mon compte</button></a>
            <div className='petit'></div>
          </div>
          <div>
            <a href='/contact1'><button className='button'>Contactez-nous</button></a>
          </div>
        </div>
        <div className="form-con">
          <form className="custom-for">
            <div className='d1'>
              <div className="form-group">
                <label htmlFor="nom">Nom de la société :</label>
                <input type="text" id="nom" name="nom" value={userData.noms} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Nom du gérant :</label>
                <input type="text" id="prenom" name="prenom" value={userData.nomg} readOnly />
              </div>
            </div>
            <div className='d1'>
              <div className="form-group">
                <label htmlFor="tel">Numéro de téléphone :</label>
                <input type="tel" id="tel" name="tel" value={userData.numerotel} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail :</label>
                <input type="email" id="email" name="email" value={userData.email} readOnly />
              </div>
            </div>
            <div className='d1'>
              <div className="form-group">
                <label htmlFor="adresse">Identifiant unique :</label>
                <input type="text" id="adresse" name="adresse" value={userData.id} readOnly />
              </div>
            </div>
            <div id='good' className='good'>
              <button className='bn632-hover bn26' type="submit" id='gd'>Confirmer</button>
            </div>
          </form>
        </div>
      </div>
      <div id='btn5'>
        <a href='#' id='liy'><button className='btn5'>Changer mot de passe</button></a>
      </div>
      <div id='d7'>
        <button id='btn4' onClick={handleLogout}>Déconnexion <LogoutIcon /></button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default Compte5;
