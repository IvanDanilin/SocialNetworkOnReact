import React from 'react'
import styles from './DialogsList.module.scss'
import { NavLink } from 'react-router-dom'
import photo from '../../Profile/ContentBlock/PageWrap/1551511784_4.jpg'





const DialogsList = (props) => {




    return (props.dialogsData.map(el => {

        const id = el.id

        const message = el.messagesAll[el.messagesAll.length - 1].message

        return (<ul>
            <li className={styles.dialogItem}>
                <NavLink to={'/dialogs/' + id} onClick={() => {props.getCurrentId(el.id)}} >
                    <div className={styles.dialogLink}>
                        <div className={styles.dialogPhoto}>
                            <img src={photo} alt="" />
                        </div>
                        <div className={styles.dialogContent}>
                            <div className={styles.dialogName}>
                                {el.name}
                            </div>
                            <div className={styles.message}>
                                {message}
                            </div>
                        </div>
                    </div>
                </NavLink>
            </li>
        </ul>)
    }))
}

export default DialogsList
