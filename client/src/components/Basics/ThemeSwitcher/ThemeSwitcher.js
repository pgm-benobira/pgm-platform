import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext';

import './ThemeSwitcher.css';

const moonSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#ff6e1f" stroke-linecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 6V3m5.5 9V7m-4-2.5h-3m9.5 5h-5m-.445 7.315a8.34 8.34 0 0 0 3.445-.74A8.37 8.37 0 1 1 7.925 5a8.37 8.37 0 0 0 7.63 11.815Z"/></svg>
);

const sunSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.1 28.1"><g fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeWidth="2.5" data-name="Icon akar-sun"><path d="M14.05 2.3V1m0 26.1v-1.3m11.745-11.75h1.3M1 14.05h1.3m20.232-8.483L24.49 3.61M3.61 24.49l1.957-1.957M3.61 3.61l1.957 1.957m16.965 16.965 1.958 1.958" data-name="Path 99"/><path d="M19.27 14.05a5.22 5.22 0 1 1-5.22-5.22 5.22 5.22 0 0 1 5.22 5.22Z" data-name="Path 100"/></g></svg>
);

export default function ThemeSwitcher() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <button onClick={toggleDarkMode} className='theme'>
        {darkMode ? sunSvg : moonSvg}
    </button>
  )
}
