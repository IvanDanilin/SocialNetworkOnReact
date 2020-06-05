import React from 'react'
import styles from './Messages.module.scss'
import CurrentMessages from './CurrentMessages/CurrentMessages'
import { Route } from 'react-router-dom'



const Messages = (props) => {
    return (
        <div className={styles.messages}>
            {props.dialogsData.map(el => <Route path={`/dialogs/${el.id}`} render={() => <CurrentMessages messages={props.dialogsData[el.id - 1].messagesAll} />} />)}
        </div>
    )
}

export default Messages