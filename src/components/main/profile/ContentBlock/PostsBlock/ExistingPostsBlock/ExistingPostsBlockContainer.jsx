import ExistingPostsBlock from './ExistingPostsBlock'
import { connect } from 'react-redux'



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
