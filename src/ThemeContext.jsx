import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create the Provider Component
export const ThemeProvider = ({ children }) => {
    // Check local storage for initial theme, default to 'light'
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    // Effect to apply the theme to the body and save to local storage
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Function to toggle between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3. Custom Hook for easy access
export const useTheme = () => {
    return useContext(ThemeContext);
};