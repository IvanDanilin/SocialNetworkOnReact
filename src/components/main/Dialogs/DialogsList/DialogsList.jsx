import React from 'react'
import styles from './DialogsList.module.scss'
import DialogLink from './DialogLink/DialogLink'
import photo from './../../../Profiles/1/1551511784_4.jpg'






const DialogsList = (props) => props.state.dialogsData.map( el => (<ul><DialogLink dispatch={props.dispatch} photoSrc={photo} dialogName={el.name} id={el.id} lastMessage={el.messagesAll[el.messagesAll.length - 1].message} /></ul> ) )

export default DialogsList
