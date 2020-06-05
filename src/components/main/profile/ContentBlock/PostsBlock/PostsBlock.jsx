import React from 'react'
import styles from './PostsBlock.module.scss'
import NewPostBlock from './NewPostBlock/NewPostBlock'
import ExistingPostsBlock from './ExistingPostsBlock/ExistingPostsBlock'

const PostsBlock = (props) => {
    return (
        <div className={styles.postsBlock}>
            <NewPostBlock />
            <ExistingPostsBlock posts={props.posts} />
        </div>
    )
}

export default PostsBlock