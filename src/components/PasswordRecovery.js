// src/components/PasswordRecovery.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Se um usuário com o e-mail ${email} existir, você receberá um link de recuperação.`);
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="password-recovery-container">
      <div className="password-recovery-section">
        <h1>HORTIAPP</h1>
        <h2>RECUPERAR SENHA</h2>
        <p>Insira seu e-mail para receber um link de recuperação.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              id="email-recuperacao"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-dark mt-3">Enviar</button>
        </form>
        {message && <p className="recovery-message">{message}</p>}
        <Link to="/" onClick={goToLogin} className="back-to-login">Voltar para Login</Link>
      </div>
    </div>
  );
}

export default PasswordRecovery;
