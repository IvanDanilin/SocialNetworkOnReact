import React from 'react'
import styles from './PostsBlock.module.scss'
import NewPostBlock from './NewPostBlock/NewPostBlock'
import ExistingPostsBlock from './ExistingPostsBlock/ExistingPostsBlock'

const PostsBlock = (props) => {
    return (
        <div className={styles.postsBlock}>
            <NewPostBlock dispatch={props.dispatch} state={props.state} />
            <ExistingPostsBlock state={props.state} />
        </div>
    )
}

export default PostsBlock