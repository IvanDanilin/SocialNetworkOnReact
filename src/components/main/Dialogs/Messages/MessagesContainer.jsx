import React from 'react'
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../../../redux/dialogsReduser'
import Messages from './Messages'
import { connect } from 'react-redux'



// const MessagesContainer = () => {



//     return (
//         <StoreContext.Consumer>
//             {(store) => {

//                 const onMessageChange = (text) => {
//                     store.dispatch(onMessageChangeActionCreator(text))
//                 }

//                 const sendMessage = () => {
//                     store.dispatch(sendMessageActionCreator())
//                 }

//                 return <Messages onMessageChange={onMessageChange} sendMessage={sendMessage} dialogs={store.getState().dialogs} />
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {dispatch(onMessageChangeActionCreator(text))},
        sendMessage: () => {dispatch(sendMessageActionCreator())},
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer