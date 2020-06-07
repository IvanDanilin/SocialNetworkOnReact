import React from 'react'
import styles from './PostsBlock.module.scss'
import NewPostBlock from './NewPostBlock/NewPostBlock'
import ExistingPostsBlock from './ExistingPostsBlock/ExistingPostsBlock'

const PostsBlock = (props) => {
    return (
        <div className={styles.postsBlock}>
            <NewPostBlock store={props.store} />
            <ExistingPostsBlock store={props.store} />
        </div>
    )
}

export default PostsBlock