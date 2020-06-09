import DialogsList from './DialogsList'
import { getCurrentIdActionCreator } from '../../../../redux/dialogsReduser'
import { connect } from 'react-redux'





const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogs.dialogsData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentId: (id) => {dispatch(getCurrentIdActionCreator(id))}
    }
}

const DialogsListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsList)


export default DialogsListContainer
