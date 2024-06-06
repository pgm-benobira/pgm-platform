import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import styles from './Search.module.css'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const { darkMode } = useContext(ThemeContext);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/results/${searchInput}`);
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.searchbar} ${darkMode ? styles.dark : ''}`}>
        <svg className={styles.searchbar__svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.414 21.414"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeWidth="2" d="m20 20-4.486-4.494M18 9.5A8.5 8.5 0 1 1 9.5 1 8.5 8.5 0 0 1 18 9.5Z" data-name="Icon akar-search"/></svg>
        <input className={styles.searchbar__input} type="text" placeholder="Zoeken naar..." onChange={handleSearchInput} />
    </form>
  )
}
