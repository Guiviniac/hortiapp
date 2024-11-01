// src/components/Footer.js
import React from 'react';
import Logo from '../assets/svg/logo.svg';
import FbIcon from '../assets/svg/fb_icon.svg';
import IgIcon from '../assets/svg/ig_icon.svg';
import LkIcon from '../assets/svg/lk_icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={Logo} alt="HORTI+ Logo" />
      </div>
      <div>© 2024 Horti＋ • Todos os direitos reservados.</div>
      <div className="social-icons">
        <a href="#"><img src={FbIcon} alt="Facebook Icon" /></a>
        <a href="#"><img src={IgIcon} alt="Instagram Icon" /></a>
        <a href="#"><img src={LkIcon} alt="LinkedIn Icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;
