import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
} from '../../../redux/usersReduser';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import { usersAPI } from '../../../api/api';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		usersAPI
			.getUsers(this.props.currentPage, this.props.pageSize)
			.then((data) => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
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
						defaultAvatar={defaultAvatar}
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


export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersContainer);
