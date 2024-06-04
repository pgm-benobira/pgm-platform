import React from 'react'
import './TeamMember.css';
import Impression from '../../Basics/Impression';
import Bubble from '../../Basics/Bubble';
import Redirect from '../../Basics/Redirect';

export default function TeamMember({ fileName, url, member, functions, description, socialLink }) {
  return (
    <div className='team-member'>
        <Impression fileName={fileName} url={url} />
        <div className='team-member__info'>
            <Bubble>
                <h2>{member}</h2>
                <p>Functie(s): <span className='focus'>{functions}</span></p>
                <p>{description}</p>
            </Bubble>
            <Redirect title='Connect' link={socialLink} target='_blank' />
        </div>
    </div>
  )
}
