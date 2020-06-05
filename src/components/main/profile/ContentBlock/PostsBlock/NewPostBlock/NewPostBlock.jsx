import React from 'react'
import styles from './NewPostBlock.module.scss'


const NewPostBlock = () => {
    return (
        <div className={styles.newPostBlock}>
            <form action='#'>
                <input type='text' placeholder='What&#39;s up?' />
                <div className={styles.buttonWrap}>
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostBlock