import React from 'react'
import styles from './Messages.module.scss'
import CurrentMessages from './CurrentMessages/CurrentMessages'
import { Route } from 'react-router-dom'
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../../../redux/dialogsReduser'




const Messages = (props) => {

    const onMessageChange = (event) => {
        props.dispatch(onMessageChangeActionCreator(event.target.value))
    }

    const sendMessage = () => {
        props.dispatch({ type: 'SEND-MESSAGE', })
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <div className={styles.messages}>

            <div className={styles.openMessages}>
                {props.state.dialogs.dialogsData.map(el => < Route path={`/dialogs/${el.id}`} render={() => <CurrentMessages messages={props.state.dialogs.dialogsData[el.id].messagesAll} />} />)}
            </div>

            <div className={styles.newMessageWrap}>
                <div></div>
                <div className={styles.newMessage}>
                    <textarea
                        onChange={onMessageChange}
                        placeholder='Enter your message...' value={props.state.dialogs.inputMessage} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )


}

export default Messages