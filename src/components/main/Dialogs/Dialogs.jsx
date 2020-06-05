import React from 'react'
import s from './Dialogs.module.scss'
import DialogsList from './DialogsList/DialogsList'
import { Route } from 'react-router-dom'
import Messages from './Messages/Messages'


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul><Route exact path='/dialogs' component={DialogsList} /></ul>
            <ul><Route path='/dialogs/*' component={Messages} /></ul>
        </div>
    )
}

export default Dialogs