import React from 'react'
import styles from './Bubble.module.css'

export default function Bubble({ children }) {
  return (
    <div className={styles.bubble}>
        {children}
    </div>
  )
}
