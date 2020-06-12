import React from 'react'
import styles from './ExistingPost.module.scss'

const ExistingPost = (props) => {
    return (
        <div className={styles.post}>
            <div>{props.textPost}</div>
            <div className={styles.likes}>{props.amountLikes} likes</div>
        </div>
    )
}

export default ExistingPost