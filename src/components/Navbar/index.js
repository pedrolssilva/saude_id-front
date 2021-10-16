import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { signOut } from '../../services/LoginService'
import StorageService from '../../services/StorageService'

import './styles.scss';

export default function Navbar(){
  const history = useHistory();
  async function handleSignOut(){
    const email = StorageService.get('email')
    if(email) {
      await signOut({
        email: StorageService.get('email'),
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