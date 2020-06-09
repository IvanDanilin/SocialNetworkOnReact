import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../../../redux/dialogsReduser'
import Messages from './Messages'
import { connect } from 'react-redux'



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