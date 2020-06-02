import React from 'react'
import topImage from "./les_tuman_derevia.jpg";
import avatar from "./1551511784_4.jpg"
import styles from "./Profile.module.scss"

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.topImage}>
        <img src={topImage} alt="cover" />
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.pageWrap}>
          <div className={styles.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.pageInfoWrap}>
            <div className={styles.pageName}>Ivan D.</div>
            <div className={styles.pageInfo}>
              <div className={styles.pageInfoRow}>Date of Birth: 27th of March</div>
              <div className={styles.pageInfoRow}>City: Moscow</div>
              <div className={styles.pageInfoRow}>Education: SFedU'15</div>
            </div>
          </div>
        </div>
        <div className={styles.postsBlock}>
          <div className={styles.inputBlock}>
            <form action="#">
              <input type="text" placeholder="What's up?" />
              <div className={styles.buttonWrap}>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className={styles.posts}> new post</div>
          <div className={styles.posts}> new post</div>
          <div className={styles.posts}> new post</div>
        </div>
      </div>
    </div>
  )
}

export default Profile