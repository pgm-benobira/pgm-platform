import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom'
import Bubble from '../../Basics/Bubble'
import Tag from '../../Basics/Tag'
import Impression from '../../Basics/Impression'
import styles from './Card.module.css'

export default function Card({ page, slug, title, date, tags, fileName, url, description }) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Link to={`/${page}${ slug ? `/${slug}` : ''}`} className={`${styles.card__link} ${darkMode ? styles.dark : ''}`}>
            <Bubble addClass={styles.card} addContainer={styles.card__container}>
                <div className={styles.card__content}>
                    <h2>{title}</h2>
                    { date ? <p className={styles.card__date}>{new Date(date).toLocaleDateString('en-GB')}</p> : null}
                    { description ? <p className={styles.card__description}>{description}</p> : null}
                    { tags ? <div className={styles.card__tags}>{tags.map(tag => <Tag key={tag.id}>{tag.title}</Tag>)}</div> : null}
                </div>
                { url ? <div className={styles.card__image}>
                    <Impression fileName={fileName} url={url} />
                </div> : null}
            </Bubble>
        </Link>
    )
}
