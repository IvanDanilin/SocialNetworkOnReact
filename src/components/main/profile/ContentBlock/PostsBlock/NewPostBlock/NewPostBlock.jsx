import React from 'react'
import styles from './NewPostBlock.module.scss'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../../../../redux/myPageReduser'



const NewPostBlock = (props) => {

    const changeNewPostText = (event) => {
        const text = event.target.value
        props.dispatch(onPostChangeActionCreator(text))
    }


    const addPost = () => {
            props.dispatch(addPostActionCreator())
    }


    return (
        <div className={styles.newPostBlock}>
            <input onChange={changeNewPostText} placeholder='What&#39;s up?' value={props.state.myPage.newPostText} />
            <div className={styles.buttonWrap}>
                <button type='submit' onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}

export default NewPostBlock