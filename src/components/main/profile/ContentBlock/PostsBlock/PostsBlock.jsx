import React from 'react'
import styles from './PostsBlock.module.scss'
import NewPostBlockContainer from './NewPostBlock/NewPostBlockContainer'
import ExistingPostsBlockContainer from './ExistingPostsBlock/ExistingPostsBlockContainer'

const PostsBlock = () => {
    return (
        <div className={styles.postsBlock}>
            <NewPostBlockContainer />
            <ExistingPostsBlockContainer />
        </div>
    )
}

export default PostsBlock