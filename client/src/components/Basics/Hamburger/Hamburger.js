import React from 'react'
import './Hamburger.css'

export default function Hamburger({ menuStatus }) {
  return (
    <button className='menu-button'>
      <svg className={`hamburger ${menuStatus}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path fill="none" stroke="#ff6e1f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M1 1h24M1 13h24M1 25h24" data-name="Icon ion-menu-outline"/></svg>
      <svg className={`cross ${menuStatus}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.1 23.1"><path fill="none" stroke="#ff6e1f" stroke-linecap="round" stroke-width="2" d="M21.686 21.686 1.414 1.414m20.272 0L1.414 21.686" data-name="Icon akar-cross"/></svg>
    </button>
  )
}
