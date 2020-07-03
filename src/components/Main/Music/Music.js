import React from 'react'
import s from './Music.module.scss'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

const Music = () => {
    return (
        <div className={s.music}>
            Music
        </div>
    )
}


export default withAuthRedirect(Music)