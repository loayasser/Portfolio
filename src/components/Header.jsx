import React from 'react';
import { useTheme } from '../ThemeContext';
// You might need an icon library like react-icons or use simple text/emoji
// import { FaSun, FaMoon } from 'react-icons/fa'; 

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <a href="#hero" className="logo">My Portfolio</a>
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        
        {/* Theme Toggle Button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          {/* Alternatively, use icons: {theme === 'light' ? <FaMoon /> : <FaSun />} */}
        </button>
      </nav>
    </header>
  );
};

export default Header;