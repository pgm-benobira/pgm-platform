import React from 'react'
import './Bubble.css'

export default function Bubble({ type='', children, addClass=''}) {
  return (
    <div className={`bubble bubble--${type} ${addClass}`}>
        {children}
    </div>
  )
}
