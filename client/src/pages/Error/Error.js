import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError();
  return (
    <>
      <h1>Foutmelding</h1>
      <p>Er heeft zich een fout voorgedaan: {error.statusText} - {error.status}</p>
    </>
  )
}