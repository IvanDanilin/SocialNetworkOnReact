import React from 'react'
import styles from './ExistingPostsBlock.module.scss'
import ExistingPost from './ExistingPost/ExistingPost'


const ExistingPostsBlock = (props) => props.posts.map(el => <ExistingPost id={el.id} textPost={el.textPost} amountLikes={el.amountLikes} />)


export default ExistingPostsBlock
