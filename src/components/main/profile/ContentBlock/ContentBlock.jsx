import React from 'react'
import s from './ContentBlock.module.scss'
import PageWrap from './PageWrap/PageWrap'
import PostsBlock from './PostsBlock/PostsBlock'

const contentBlock = () => {
    return (
        <div className={s.contentBlockWrapper}>
            <div className={s.contentBlock}>
                <PageWrap />
                <PostsBlock />
            </div>
        </div>
    )
}

export default contentBlock