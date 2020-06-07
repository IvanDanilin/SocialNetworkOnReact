import React from 'react'
import styles from './NewPostBlock.module.scss'



const NewPostBlock = (props) => {

    const newPostElement = React.createRef()


    const addPost = () => {
        const text = newPostElement.current.value
        if (text) {
            props.dispatch({
                type: 'ADD-POST',
                text: text
            })
        }
        newPostElement.current.value = null
    }


    return (
        <div className={styles.newPostBlock}>
            <input type='text' placeholder='What&#39;s up?' ref={newPostElement} />
            <div className={styles.buttonWrap}>
                <button type='submit' onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}

export default NewPostBlock