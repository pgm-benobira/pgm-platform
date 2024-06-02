import React from 'react'
import './Search.css'

export default function Search() {
  return (
    <div className='search-bar'>
        <svg className='search-bar__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.414 21.414"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeWidth="2" d="m20 20-4.486-4.494M18 9.5A8.5 8.5 0 1 1 9.5 1 8.5 8.5 0 0 1 18 9.5Z" data-name="Icon akar-search"/></svg>
        <input className='search-bar__input' type="text" placeholder="Zoeken naar..." />
    </div>
  )
}
