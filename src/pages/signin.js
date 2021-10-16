import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import api from '../services/api'
import StorageService from '../services/StorageService'


import '../styles/login.scss';

const SignIn = () =>{
  const history = useHistory()

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

    const loadToastId = toast.loading("Entrando...")
    api
      .post('login/in', {email, password})
      .then((response) => {
        console.log('handleRegistration response', response)
        StorageService.set('userId', response.data.userId)
        StorageService.set('email', email)
        StorageService.set('token', response.data.token)
        history.push('/movies')
      })
      .catch(function (error) {
        console.log(error)
        toast.error('Falha ao fazer login. Tente novamente!')
      })
      .finally(function () {
        toast.dismiss(loadToastId); 
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
