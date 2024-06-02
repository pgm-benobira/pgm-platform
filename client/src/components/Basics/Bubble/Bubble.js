import React from 'react'
import './Bubble.css'

export default function Bubble({ type, children }) {
  return (
    <div className={`bubble bubble--${type}`}>
        {children}
    </div>
  )
}
