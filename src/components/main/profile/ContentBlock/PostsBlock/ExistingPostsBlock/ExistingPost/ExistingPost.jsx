import React from 'react'
import s from './ExistingPost.module.scss'

const ExistingPost = (props) => {
    return (
        <div className={s.post}>{props.textPost}</div>
    )
}

export default ExistingPost