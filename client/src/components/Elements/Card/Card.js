import React from 'react'
import { Link } from 'react-router-dom'
import Bubble from '../../Basics/Bubble'
import Tag from '../../Basics/Tag'
import Impression from '../../Basics/Impression'
import './Card.css'

export default function Card({ page, slug, title, date, tags, fileName, url }) {
    return (
        <Link to={`/${page}/${slug}`} className='card__link'>
            <Bubble key={slug} addClass="card">
                <div className='card__content'>
                    <h2>{title}</h2>
                    <p className='card__date'>{new Date(date).toLocaleDateString('en-GB')}</p>
                    <div className='card__tags'>{tags.map(tag => <Tag>{tag.title}</Tag>)}</div>
                </div>
                <div className='card__image'>
                    <Impression fileName={fileName} url={url} />
                </div>
            </Bubble>
        </Link>
    )
}
