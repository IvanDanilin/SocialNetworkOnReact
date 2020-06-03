import React from 'react'
import topImage from "./les_tuman_derevia.jpg";
import s from "./Profile.module.scss"
import ContentBlock from './ContentBlock/ContentBlock';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.topImage}>
        <img src={topImage} alt="cover" />
      </div>
      <ContentBlock />
    </div>
  )
}

export default Profile