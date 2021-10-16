import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from "react-router-dom";
import api from '../services/api'

import '../styles/login.scss';

const SignUp = () =>{
  const history = useHistory()
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

    const loadToastId = toast.loading("Registrando conta...")
    api
      .post('login/create', {email, password, repeatPassword})
      .then((response) => {
        console.log('handleRegistration response', response)
        history.push('/signin')
      })
      .catch(function (error) {
        toast.error('Falha ao registrar. Tente novamente!')
      })
      .finally(function () {
        toast.dismiss(loadToastId); 
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
