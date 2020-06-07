import React from 'react'
import styles from './ContentBlock.module.scss'
import PageWrap from './PageWrap/PageWrap'
import PostsBlock from './PostsBlock/PostsBlock'

const contentBlock = (props) => {
    return (
        <div className={styles.contentBlockWrapper}>
            <div className={styles.contentBlock}>
                <PageWrap />
                <PostsBlock state={props.state} dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default contentBlock