import React from 'react'
import styles from './DialogsList.module.scss'
import photo from './../../../Profiles/1/1551511784_4.jpg'
import { NavLink } from 'react-router-dom'





const DialogsList = (props) => {



    return (props.dialogsData.map(el => {

        const id = el.id

        const getCurrentId = (id) => {
            props.getCurrentId(id)
        }
        
        return (<ul>
            <li className={styles.dialogItem}>
                <NavLink to={'/dialogs/' + id} onClick={getCurrentId(id)}>
                    <div className={styles.dialogLink}>
                        <div className={styles.dialogPhoto}>
                            <img src={photo} alt="" />
                        </div>
                        <div className={styles.dialogContent}>
                            <div className={styles.dialogName}>
                                {el.name}
                            </div>
                            <div className={styles.message}>
                                {el.messagesAll[el.messagesAll.length - 1].message}
                            </div>
                        </div>
                    </div>
                </NavLink>
            </li>
        </ul>)
    }))
}

export default DialogsList
