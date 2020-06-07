import React from 'react'
import styles from './Messages.module.scss'
import CurrentMessages from './CurrentMessages/CurrentMessages'
import { Route } from 'react-router-dom'



const Messages = (props) => {


    const onMessageChange = () => {
        const textMessage = textMessageRef.current.value
            props.store.onMessageChange(textMessage)
    }

    const textMessageRef = React.createRef()

    const sendMessage = () => {
            props.store.sendMessage()
    }

    return (
        <div className={styles.messages}>

            <div className={styles.openMessages}>
                {props.store._state.dialogsData.map(el => < Route path={`/dialogs/${el.id}`} render={() => <CurrentMessages messages={props.store._state.dialogsData[el.id].messagesAll} />} />)}
            </div>

            <div className={styles.newMessageWrap}>
                <div></div>
                <div className={styles.newMessage}>
                    <textarea 
                    onChange={onMessageChange}
                    ref={textMessageRef} placeholder='Enter your message...' value={props.store._state.inputMessage} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )


}

export default Messages