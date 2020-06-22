import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, getUsers } from '../../../redux/users-reducer';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
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
						onPageChanged={this.onPageChanged}
						users={this.props.users}
						defaultAvatar={defaultAvatar}
						followingInProgress={this.props.followingInProgress}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
					/>
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentPage: state.usersPage.currentPage,
		users: state.usersPage.users,
		followingInProgress: state.usersPage.followingInProgress,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		isFetching: state.usersPage.isFetching,
	};
};

export default connect(mapStateToProps, {
	follow,
	unfollow,
	getUsers,
})(UsersContainer);
