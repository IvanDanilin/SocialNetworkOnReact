import React from 'react'
import styles from './ExistingPostsBlock.module.scss'
import ExistingPost from './ExistingPost/ExistingPost'


const ExistingPostsBlock = (props) => {
    return (
        <div className={styles.existingPostsBlock}>
            {props.existingPosts.map(el => <ExistingPost key={el.id} textPost={el.textPost} amountLikes={el.amountLikes} />)}
        </div>
    )
}

export default ExistingPostsBlock
