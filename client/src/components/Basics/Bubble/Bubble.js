import React from 'react'
import './Bubble.css'

export default function Bubble({ type='primary', children, addClass=''}) {
  return (
    <div className={`bubble bubble--${type} ${addClass}`}>
        {children}
    </div>
  )
}
