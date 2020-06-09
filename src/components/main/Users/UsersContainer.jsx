import { connect } from "react-redux"
import Users from "./Users"
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../../redux/usersReduser"
import photoSrc from '../Profile/ContentBlock/PageWrap/1551511784_4.jpg'



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        photoSrc: photoSrc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer