import React from 'react'
import s from './DialogLink.module.scss'
import { NavLink } from 'react-router-dom'

const DialogLink = (props) => {

    const getCurrentId = () => {
        props.getCurrentId(props.id)
    }

    return (
        <li className={s.dialogItem}>
            <NavLink to={'/dialogs/' + props.id} onClick={getCurrentId}>
                <div className={s.dialogLink}>
                    <div className={s.dialogPhoto}>
                        <img src={props.photoSrc} alt="" />
                    </div>
                    <div className={s.dialogContent}>
                        <div className={s.dialogName}>
                            {props.dialogName}
                        </div>
                        <div className={s.message}>
                            {props.lastMessage}
                        </div>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default DialogLink