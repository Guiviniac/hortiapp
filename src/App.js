// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import PasswordRecovery from './components/PasswordRecovery';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="welcome-section">
                    <p>BEM-VINDO AO</p>
                    <h1>HORTIAPP</h1>
                    <div className="buttons">
                      <button
                        className={`login-btn ${showLogin ? 'active-btn' : ''}`}
                        onClick={() => setShowLogin(true)}
                      >
                        Login
                      </button>
                      <button
                        className={`signup-btn ${!showLogin ? 'active-btn' : ''}`}
                        onClick={() => setShowLogin(false)}
                      >
                        Cadastre-se
                      </button>
                    </div>
                  </div>
                  <div className="form-section">
                    {showLogin ? <Login /> : <Signup setShowLogin={setShowLogin} />}
                  </div>
                </>
              }
            />
            <Route path="/recuperacao-senha" element={<PasswordRecovery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
