import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme !== null ? JSON.parse(savedTheme) : false;
    });

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
        body.classList.add('dark-mode');
        } else {
        body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
        </ThemeContext.Provider>
    );
};