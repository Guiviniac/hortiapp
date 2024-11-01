// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-section">
      <h2>LOGIN</h2>
      <div className="phone-input">
        <select id="ddi" name="ddi">
          <option value="+55">+55</option>
        </select>
        <input type="tel" id="telefone" placeholder="Digite seu telefone" />
      </div>
      <div className="input-password-container">
        <input type="password" id="senha-login" placeholder="Digite sua senha" className="input-password" />
        <span className="toggle-password">
          <img src="./assets/svg/eye_closed_icon.svg" alt="Mostrar senha" />
        </span>
      </div>
      <button className="btn btn-dark mt-3">Entrar</button>
      <Link to="/recuperacao-senha">Esqueceu sua senha?</Link>
    </div>
  );
}

export default Login;
