/**
 * Error page
 * Used to display an error message.
 * It consists of two sections:
 * - the top section: the error code
 * - the bottom section: the error message
 */

import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../../components/Elements/Header';
import Footer from '../../components/Elements/Footer';
import Bubble from '../../components/Basics/Bubble';

export default function Error({ code, text }) {
    const error = useRouteError();
  return (
    <>
      {error ? <Header /> : null}
      <h1>Foutmelding - <span className='focus'>{error ? error.status : code}</span></h1>
      <Bubble>Volgende error heeft zich voorgedaan: <span className='focus'>{error ? error.statusText : text}</span></Bubble>
      {error ? <Footer /> : null}
    </>
  )
}