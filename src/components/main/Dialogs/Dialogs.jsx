import React from 'react'
import styles from './Dialogs.module.scss'
import DialogsList from './DialogsList/DialogsList'
import { Route } from 'react-router-dom'
import Messages from './Messages/Messages'


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <Route exact path='/dialogs' render={() => <DialogsList dispatch={props.dispatch} state={props.state}  />} />
            <Route strict path='/dialogs/'  render={() => <Messages dispatch={props.dispatch} state={props.state} />} />
        </div>
    )
}

export default Dialogs