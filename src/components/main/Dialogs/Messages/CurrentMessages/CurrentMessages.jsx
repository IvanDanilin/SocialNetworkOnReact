import React from 'react'
import styles from './CurrentMessages.module.scss'

const CurrentMessages = (props) => {
    let message = props.messages.map( messageEl => <div className={styles.message}>{messageEl.message}</div>)
    return (
        message
    )
}

export default CurrentMessages