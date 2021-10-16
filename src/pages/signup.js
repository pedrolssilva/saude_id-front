import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { register } from '../services/LoginService'

import '../styles/login.scss';

const SignUp = () =>{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  async function handleRegistration(event){ 
    event.preventDefault();
    
    if(email === '') {
      toast.error('Por favor, preencha o campo de email! ')
    }
    if(password !== repeatPassword) {
      toast.error('Senha e confirmação de senhas devem ser iguais ')
    }

    await register({
      email,
      password,
      repeatPassword
    })
  }

  return (
    <div id='page-sign-up'>
      <main>
        <div className='main-content'>
          <h1>Registre-se</h1>
          <form onSubmit={handleRegistration}>
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
            <input 
              type="password" 
              placeholder="repetir a senha"
              onChange={event => setRepeatPassword(event.target.value)}
              value={repeatPassword}
            />
            <button type="submit">
              Registrar
            </button>
          </form>
          <p>Já tem uma conta? <Link to="/signin"> Entrar</Link> </p>  
        </div>
      </main>
    </div>
  )
}
export default SignUp;
