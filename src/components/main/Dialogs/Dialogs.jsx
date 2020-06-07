import React from 'react'
import styles from './Dialogs.module.scss'
import DialogsList from './DialogsList/DialogsList'
import { Route } from 'react-router-dom'
import Messages from './Messages/Messages'


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <Route exact path='/dialogs' render={() => <DialogsList store={props.store} />} />
            <Route strict path='/dialogs/'  render={() => <Messages store={props.store} />} />
        </div>
    )
}

export default Dialogs