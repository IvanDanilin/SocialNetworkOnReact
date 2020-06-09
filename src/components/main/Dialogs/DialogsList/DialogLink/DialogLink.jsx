import React from 'react'
import styles from './DialogLink.module.scss'
import { NavLink } from 'react-router-dom'
import photo from '../../../Profile/ContentBlock/PageWrap/1551511784_4.jpg'


const DialogLink = (props) => {

    const id = props.id

    let getCurrentId = (id) => {
        props.getCurrentId(id)
    }

    return (
        <li className={styles.dialogItem}>
                <NavLink to={'/dialogs/' + id} onClick={getCurrentId(props.id)} >
                    <div className={styles.dialogLink}>
                        <div className={styles.dialogPhoto}>
                            <img src={photo} alt="" />
                        </div>
                        <div className={styles.dialogContent}>
                            <div className={styles.dialogName}>
                                {props.name}
                            </div>
                            <div className={styles.message}>
                                {props.message}
                            </div>
                        </div>
                    </div>
                </NavLink>
            </li>
    )
}

export default DialogLink