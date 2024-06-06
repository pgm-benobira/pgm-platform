import React from 'react'
import styles from './TeamMember.module.css'
import Impression from '../../Basics/Impression';
import Bubble from '../../Basics/Bubble';
import Redirect from '../../Basics/Redirect';

export default function TeamMember({ fileName, url, member, functions, description, socialLink }) {
  return (
    <div className={styles.teammember}>
        <Impression fileName={fileName} url={url} />
        <div className={styles.teammember__info}>
            <Bubble>
                <h2>{member}</h2>
                <p>Functie(s): <span className={styles.focus}>{functions}</span></p>
                <p>{description}</p>
            </Bubble>
            <Redirect title='Meer weten' link={socialLink} target='_blank' />
        </div>
    </div>
  )
}
