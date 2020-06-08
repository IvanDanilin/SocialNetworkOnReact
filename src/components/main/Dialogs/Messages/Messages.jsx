import React from 'react'
import styles from './Messages.module.scss'
import CurrentMessages from './CurrentMessages/CurrentMessages'
import { Route } from 'react-router-dom'




const Messages = (props) => {

    const onMessageChange = (event) => {
        const text = event.target.value
        props.onMessageChange(text)
    }

    const sendMessage = () => {
        props.sendMessage()
    }

    return (
        <div className={styles.messages}>

            <div className={styles.openMessages}>
                {props.dialogs.dialogsData.map(el => < Route path={`/dialogs/${el.id}`} render={() => <CurrentMessages messages={props.dialogs.dialogsData[el.id].messagesAll} />} />)}
            </div>

            <div className={styles.newMessageWrap}>
                <div></div>
                <div className={styles.newMessage}>
                    <textarea
                        onChange={onMessageChange}
                        placeholder='Enter your message...' value={props.dialogs.inputMessage} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )


}

export default Messages