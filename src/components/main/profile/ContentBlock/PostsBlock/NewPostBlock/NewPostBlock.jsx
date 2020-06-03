import React from 'react'
import s from './NewPostBlock.module.scss'


const NewPostBlock = () => {
    return (
        <div className={s.newPostBlock}>
            <form action="#">
                <input type="text" placeholder="What's up?" />
                <div className={s.buttonWrap}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostBlock