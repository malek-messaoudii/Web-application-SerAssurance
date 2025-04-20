import React, { useState, useEffect } from 'react';
import './Consultation.css';
import Footer from '../Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const backendURL = 'http://localhost:4000/claim';

function Consultation() {
  const { demandeassuranceId } = useParams();
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const email =localStorage.getItem('userEmail');
        const response = await axios.get(`${backendURL}/getclaimbyEmail/${email}`);
        setClaims(response.data);
      } catch (error) {
        console.error('Error fetching claims:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchClaims();
  }, [demandeassuranceId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching claims.</div>;
  }

  return (
    <div>
      <CustomNavbar userRole='client' />
      <div className="circle-container">
        <span className="message">Contactez l'agent d'entreprise d'assurance</span>
        <IconButton href='/Chat'><div className="circle"><ChatBubbleIcon/></div></IconButton>
      </div>
      <div className='div2'>
        <h1 className='title3'>Réclamations</h1>
      </div>
      <div id="titre" className='a2'>Réclamation des contrats</div>
      <div id='m5'>
        <Link to='/AutoRéclamation' id='a5'>
          <div className='m4' id='a4'><ArrowBackIcon/></div>
        </Link>
      </div>

      {claims.length === 0 ? (
        <div className="no-claims">
          <h3>Aucune réclamation trouvé.</h3>
        </div>
      ) : (
        claims.map(claim => (
          <div key={claim._id} className='a1'>
            <div className="connexion">
              <form className="form">
                <label>Date de création:</label>
                <input required className="input" type="text" value={new Date(claim.date).toLocaleDateString()} readOnly />
                <br/>
                <label>Volé:</label>
                <br/>
                <input type="checkbox" id='a3' checked={claim.etat} readOnly />
                <br/>
                <br/>
                <label>Description:</label>
                <textarea required className="textarea" value={claim.description} readOnly />
                <br/>
                <label>Status:</label>
                <input required className="input" type="text" value={claim.status} readOnly />
                <br/>
                <label>State:</label>
                <input required className="input" type="text" value={claim.state} readOnly />
                <br/>
              </form>
            </div>
          </div>
        ))
      )}
      <Footer/>
    </div>
  );
}

export default Consultation;
