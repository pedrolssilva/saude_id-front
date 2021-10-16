import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { signIn } from '../services/LoginService'

import '../styles/login.scss';

const SignIn = () =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleSignIn(event){ 
    event.preventDefault();
    
    if(setEmail === '') {
      toast.error('Por favor, preencha o campo de email! ')
    }
    if(password  === '') {
      toast.error('Por favor, preencha o campo de senha! ')
    }

    await signIn({
      email,
      password
    })
  }

  return (
    <div id='page-sign-in'>
      <main>
        <div className='main-content'>
          <h1>Entrar</h1>
          <form onSubmit={handleSignIn}>
            <input 
              type="email" 
              placeholder="seu_email@dominio.com"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <input 
              type="password" 
              placeholder="senha"
              onChange={event => setPassword(event.target.value)}
              value={password}
            />
            <button type="submit">
              Entrar
            </button>
          </form>
          <p>Não tem uma conta? <Link to="/"> Registre-se</Link> </p>  
        </div>
      </main>
    </div>
  )
}
export default SignIn;
