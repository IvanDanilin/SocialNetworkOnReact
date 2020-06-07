import React from 'react'
import styles from './Messages.module.scss'
import CurrentMessages from './CurrentMessages/CurrentMessages'
import { Route } from 'react-router-dom'



const Messages = (props) => {


    const textMessageRef = React.createRef()


    const onMessageChange = () => {
        props.dispatch({ type: 'ON-MESSAGE-CHANGE', textMessage: textMessageRef.current.value, })
    }

    const sendMessage = () => {
        props.dispatch({ type: 'SEND-MESSAGE', })
    }

    return (
        <div className={styles.messages}>

            <div className={styles.openMessages}>
                {props.state.dialogsData.map(el => < Route path={`/dialogs/${el.id}`} render={() => <CurrentMessages messages={props.state.dialogsData[el.id].messagesAll} />} />)}
            </div>

            <div className={styles.newMessageWrap}>
                <div></div>
                <div className={styles.newMessage}>
                    <textarea
                        onChange={onMessageChange}
                        ref={textMessageRef} placeholder='Enter your message...' value={props.state.inputMessage} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )


}

export default Messages