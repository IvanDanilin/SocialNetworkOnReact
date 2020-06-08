import React from 'react'
import DialogsList from './DialogsList'
import { getCurrentIdActionCreator } from '../../../../redux/dialogsReduser'
import { connect } from 'react-redux'





// const DialogsListContainer = () => {
//     return (<StoreContext.Consumer>
//         {(store) => {
//         return <DialogsList
//          dialogsData={store.getState().dialogs.dialogsData}
//           dispatch={store.dispatch}
//            getCurrentIdActionCreator={getCurrentIdActionCreator} />
//         }}
//     </StoreContext.Consumer>)
// }


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogs.dialogsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getCurrentId: (id) => {dispatch(getCurrentIdActionCreator(id))}
    }
}

const DialogsListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsList)


export default DialogsListContainer
