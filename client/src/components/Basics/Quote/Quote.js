import React from 'react'
import Bubble from '../Bubble'
import styles from './Quote.module.css'

export default function Quote({ testimonial, name, role }) {
  return (
    <div className={styles.quote}>
        <Bubble>{testimonial}</Bubble>
        <Bubble type='secondary'>
            <div className={styles.quote__author}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.313 73.652"><path fill="none" stroke="#ff6e1f" strokeWidth="2" d="M101.313 45.783a26.862 26.862 0 0 1-26.87 26.867h-1.791a7.165 7.165 0 0 1 0-14.33h1.791a12.547 12.547 0 0 0 12.539-12.537v-1.792h-14.33a14.344 14.344 0 0 1-14.33-14.33V15.33A14.344 14.344 0 0 1 72.652 1h14.33a14.344 14.344 0 0 1 14.33 14.33Zm-57.322 0A26.862 26.862 0 0 1 17.122 72.65H15.33a7.165 7.165 0 0 1 0-14.33h1.791a12.547 12.547 0 0 0 12.54-12.537v-1.792H15.33A14.344 14.344 0 0 1 1 29.661V15.33A14.344 14.344 0 0 1 15.33 1h14.33a14.344 14.344 0 0 1 14.33 14.33Z" data-name="Icon fa-solid-quote-right"/></svg>
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </Bubble>
    </div>
  )
}
