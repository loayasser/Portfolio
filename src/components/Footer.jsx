import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} Loay Berzan. All rights reserved.
        </p>
        <p className="footer-credit">
          Designed & Built with <span className="heart">💙</span> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;