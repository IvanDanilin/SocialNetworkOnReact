import React from 'react'
import s from './PostsBlock.module.scss'
import NewPostBlock from './NewPostBlock/NewPostBlock'
import ExistingPostsBlock from './ExistingPostsBlock/ExistingPostsBlock'

const PostsBlock = () => {
    return (
        <div className={s.postsBlock}>
            <NewPostBlock />
            <ExistingPostsBlock />
        </div>
    )
}

export default PostsBlock