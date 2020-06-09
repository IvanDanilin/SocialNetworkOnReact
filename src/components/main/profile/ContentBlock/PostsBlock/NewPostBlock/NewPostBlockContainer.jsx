import { addPostActionCreator, onPostChangeActionCreator } from '../../../../../../redux/myPageReduser'
import NewPostBlock from './NewPostBlock'
import { connect } from 'react-redux'




let mapStateToProps = (state) => {
    return {
        newPostText: state.myPage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeNewPostText: (text) => {dispatch(onPostChangeActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreator())},
    }
}

const NewPostBlockContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostBlock)


export default NewPostBlockContainer