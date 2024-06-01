import React from 'react'
import './Impression.css'

export default function Impression({ fileName, url }) {
  return (
    <div className='impression'>
        <img src={url} alt={fileName || 'Sfeerbeeld'} />
    </div>
  )
}
