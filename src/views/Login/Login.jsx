import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Login.scss';




const Login = () => {
  return (
    <section className='Login-container'>
      <Header />
      <div className='title-container'>
        <h1 className='h1-title'>Acesse com seu login ou cadastre-se!</h1>
        <h2 className='h2-title'> você pode entrar com o seu CPF</h2>

        <form className='form-container'>
          <div className='inputs-container'>
            <h1>Digite seu CPF:</h1>
            <input type="text" placeholder='Digite seu CPF' />
            <h1>Senha:</h1>
            <input type="text" placeholder='Senha:' />
          </div>
          <button> <Link to={`/home`}> Entrar</Link></button>
        </form>
      </div>
    </section>
  );
}

export default Login;