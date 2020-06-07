import React from 'react'
import topImage from './les_tuman_derevia.jpg';
import styles from './Profile.module.scss'
import ContentBlock from './ContentBlock/ContentBlock';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.topImage}>
        <img src={topImage} alt='cover' />
      </div>
      <ContentBlock state={props.state} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile