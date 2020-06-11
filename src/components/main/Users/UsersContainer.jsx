import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Users from './Users';
import {
	followActionCreator,
	unfollowActionCreator,
	setUsersActionCreator,
	setCurrentPageActionCreator,
	setTotalUsersCountActionCreator,
	toggleIsFetchingActionCreator,
} from '../../../redux/usersReduser';
import Preloader from '../../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	com;
	componentDidMount() {
		this.props.toggleIsFetching(true);
		Axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
		).then((response) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}
	onPageChanged = (p) => {
		this.props.setCurrentPage(p);
		this.props.toggleIsFetching(true);
		Axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
		).then((response) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
		});
	};
	render() {
		let pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.pageSize
		);

		let pages = [];

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						pages={pages}
						currentPage={this.props.currentPage}
						users={this.props.users}
						unfollow={this.props.unfollow}
						follow={this.props.follow}
						onPageChanged={this.onPageChanged}
					/>
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followActionCreator(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowActionCreator(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageActionCreator(pageNumber));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountActionCreator(totalCount));
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingActionCreator(isFetching));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);