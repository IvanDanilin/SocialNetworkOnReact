import React from 'react'
import DialogLink from './DialogLink/DialogLink'




const DialogsList = (props) => {




    return (props.dialogsData.map(el => {

        const id = el.id

        const message = el.messagesAll[el.messagesAll.length - 1].message

        return (<ul>
            <DialogLink key={id}
                getCurrentId={props.getCurrentId}
                id={el.id} name={el.name}
                message={message} />
        </ul>)
    }))
}

export default DialogsList
