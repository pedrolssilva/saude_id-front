import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import StorageService from '../../services/StorageService'
import api from '../../services/api'

import './styles.scss';

export default function Navbar(){
  const history = useHistory();
  async function handleSignOut(){
    const email = StorageService.get('email')
    if(email) {
      const loadToastId = toast.loading("Saindo...")
      api
        .post('login/out', {email})
        .then((response) => {
          StorageService.clear()
        })
        .catch(function (error) {
          console.log(error)
          toast.error('Falha ao fazer logout. Tente novamente!')
        })
        .finally(function () {
          toast.dismiss(loadToastId); 
        })
    }
      history.push('/signin')
  }

  return (
  <div id="wrapper">
    <div className="navbar">
      <p>
        <Link to="/">Registrar</Link>
      </p>
      <p>
        <Link to="/signin">Entrar</Link>
      </p>
      <p>
        <Link to="/movies">Ver Filmes</Link>
      </p>
      <p>
        <button type="button" onClick={handleSignOut}>Sair</button>
      </p>
    </div>
  </div>
  );
}