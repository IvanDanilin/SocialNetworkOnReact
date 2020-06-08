import React from 'react'
import topImage from './les_tuman_derevia.jpg';
import styles from './Profile.module.scss'
import ContentBlock from './ContentBlock/ContentBlock';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.topImage}>
        <img src={topImage} alt='cover' />
      </div>
      <ContentBlock />
    </div>
  )
}

export default Profile