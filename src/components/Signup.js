// src/components/Signup.js
import React from 'react';
import EyeClosedIcon from '../assets/svg/eye_closed_icon.svg';

function Signup({ setShowLogin }) {
  return (
    <div className="signup-section">
      <h2>CADASTRO</h2>
      <div className="input-container">
        <input type="text" id="nome" placeholder="Digite seu nome" />
      </div>
      <div className="input-container">
        <input type="email" id="email" placeholder="Digite seu email" />
      </div>
      <div className="phone-input">
        <select id="ddi" name="ddi">
          <option value="+55">+55</option>
        </select>
        <input type="tel" id="telefone-cadastro" placeholder="Digite seu telefone" />
      </div>
      <div className="input-container">
        <input type="text" id="cpf" placeholder="Digite seu CPF" maxLength="14" />
      </div>
      <div className="input-container">
        <input type="date" id="nascimento" placeholder="Data de Nascimento" />
      </div>
      <div className="input-password-container">
        <input type="password" id="senha-cadastro" placeholder="Digite sua senha" className="input-password" />
        <span className="toggle-password">
          <img src={EyeClosedIcon} alt="Mostrar senha" />
        </span>
      </div>
      <div className="input-password-container">
        <input type="password" id="confirmar-senha" placeholder="Confirme sua senha" className="input-password" />
      </div>
      <button className="btn btn-dark mt-3">Cadastrar</button>
      <a href="#" onClick={() => setShowLogin(true)}>Já tem uma conta? Faça login</a>
    </div>
  );
}

export default Signup;
