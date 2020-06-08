import React from 'react'
import ExistingPostsBlock from './ExistingPostsBlock'
import { connect } from 'react-redux'


// const ExistingPostsBlockContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 return <ExistingPostsBlock existingPosts={store.getState().myPage.existingPosts} />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        existingPosts: state.myPage.existingPosts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const ExistingPostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(ExistingPostsBlock)



export default ExistingPostsBlockContainer
