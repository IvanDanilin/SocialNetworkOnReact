import React from 'react'
import styles from './DialogLink.module.scss'
import { NavLink } from 'react-router-dom'

const DialogLink = (props) => {

    const getCurrentId = () => {
        props.store.getCurrentId(props.id)
    }

    return (
        <li className={styles.dialogItem}>
            <NavLink to={'/dialogs/' + props.id} onClick={getCurrentId}>
                <div className={styles.dialogLink}>
                    <div className={styles.dialogPhoto}>
                        <img src={props.photoSrc} alt="" />
                    </div>
                    <div className={styles.dialogContent}>
                        <div className={styles.dialogName}>
                            {props.dialogName}
                        </div>
                        <div className={styles.message}>
                            {props.lastMessage}
                        </div>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default DialogLink