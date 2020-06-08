import React from 'react'
import styles from './Dialogs.module.scss'
import DialogsListContainer from './DialogsList/DialogsListContainer'
import { Route } from 'react-router-dom'
import MessagesContainer from './Messages/MessagesContainer'


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <Route exact path='/dialogs' render={() => <DialogsListContainer />} />
            <Route strict path='/dialogs/'  render={() => <MessagesContainer />} />
        </div>
    )
}

export default Dialogs