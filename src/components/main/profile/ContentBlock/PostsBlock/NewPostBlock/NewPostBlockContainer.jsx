import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../../../../redux/myPageReduser'
import NewPostBlock from './NewPostBlock'
import { connect } from 'react-redux'


// const NewPostBlockContainer = () => {

//     return (

//         <StoreContext.Consumer>
//             {(store) => {

//                 const changeNewPostText = (text) => {
//                     store.dispatch(onPostChangeActionCreator(text))
//                 }

//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }

//                 const newPostText = store.getState().myPage.newPostText


//                 return <NewPostBlock
//                     changeNewPostText={changeNewPostText}
//                     addPost={addPost}
//                     newPostText={newPostText} />

//             }}
//         </StoreContext.Consumer>)
// }



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