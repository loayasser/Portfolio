import React from 'react';

const Footer = () => {
  // We use JavaScript to get the current year dynamically
  const currentYear = new Date().getFullYear(); 
  return (
    <footer>
      <p>&copy; {currentYear} [Your Full Name]. All rights reserved. Built with React and CSS.</p>
    </footer>
  );
};

export default Footer;