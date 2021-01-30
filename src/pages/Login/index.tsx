import React, { FormEvent, useContext, useState } from 'react';

import AuthContext from '../../contexts/auth';


import './styles.css';

function Login() {
  const { login } = useContext(AuthContext);

  const[user, setUser] = useState('');
  const[pass, setPass] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const credentials = {
      user,
      pass,
    };

    login(credentials);
  }

  return (
    <div id="page-login">
      <header className="header">
        <h1>Login</h1>
        <p>Informe usário e senha</p>
        {/* <img src={ } alt="cadeado" /> */}
      </header>
      <main className="main">
        <form title="form-login" onSubmit={handleSubmit}>
          <div className="data">
            <label htmlFor="login">Login:</label>
            <input
              name="login"
              type="text"
              className="input"
              value={user}
              onChange={event => setUser(event.target.value)}
            />
          </div>
          <div className="data">
            <label htmlFor="senha">Senha:</label>
            <input
              name="senha"
              type="password"
              className="input"
              value={pass}
              onChange={event => setPass(event.target.value)}
            />
          </div>
          <div className="data">
            <label htmlFor="orgao">Órgão:</label>
            <select name="orgao" className="input" >
              <option value="">Selecione o Órgão</option>
              <option value="">Selecione o Órgão</option>
              <option value="">Selecione o Órgão</option>
            </select>
          </div>
          <div className="data">
            <label htmlFor="exercicio">Exercício:</label>
            <select name="exercicio" className="input" >
              <option value="">Selecione o Exercício</option>
            </select>
          </div>
        </form>
      </main>
      <footer className="footer">
        <button>
          Configurar
        </button>
        <button>
          F5 - Cancelar
        </button>
        <button type="submit" onClick={handleSubmit}>
          F6 - OK
        </button>
      </footer>
    </div>
  );
}

export default Login;