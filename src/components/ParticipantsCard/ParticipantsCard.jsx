import React from 'react'

import styles from './ParticipantsCard.module.css'

const ParticipantsCard = ({fullName, email}) => {
 
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>
        {fullName}
      </h3>
      <span className={styles.email}>{email}</span>
    </article>
  )
}

export default ParticipantsCard
