import React, { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <a href="#hero" className="logo">Loay Berzan</a>

      <button
        type="button"
        className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="menu-line" />
        <span className="menu-line" />
        <span className="menu-line" />
      </button>

      <nav id="main-navigation" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#portfolio" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <button className="theme-toggle-btn" onClick={toggleTheme} type="button">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </nav>

      {isMenuOpen && (
        <button
          type="button"
          className="menu-overlay"
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
