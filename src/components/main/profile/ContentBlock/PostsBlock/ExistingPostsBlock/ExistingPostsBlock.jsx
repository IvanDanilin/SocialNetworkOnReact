import React from 'react'
import s from './ExistingPostsBlock.module.scss'
import ExistingPost from './ExistingPost/ExistingPost'

const ExistingPostsBlock = () => {
    return (
        <div className={s.existingPostsBlock}>
            <ExistingPost textPost='Hello! How are you?' />
            <ExistingPost textPost='Yo! My name is Ivan.' />
            <ExistingPost textPost='I like JS and React' />
            <ExistingPost textPost='Watafak, mazafaka, suka, blya!' />
        </div>
    )
}


export default ExistingPostsBlock