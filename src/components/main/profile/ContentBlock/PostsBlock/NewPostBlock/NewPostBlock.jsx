import React from 'react'
import styles from './NewPostBlock.module.scss'



const NewPostBlock = (props) => {

    const changeNewPostText = (event) => {
        const text = event.target.value
        props.changeNewPostText(text)
    }


    const addPost = () => {
        props.addPost()
    }


    return (
        <div className={styles.newPostBlock}>
            <input onChange={changeNewPostText} placeholder='What&#39;s up?' value={props.newPostText} />
            <div className={styles.buttonWrap}>
                <button type='submit' onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}

export default NewPostBlock