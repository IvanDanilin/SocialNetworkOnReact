import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	follow,
	unfollow,
	getUsers,
	setUsers,
} from '../../../redux/reducers/usersReducer';
import defaultAvatar from '../../../assets/image/defaultAvatar.png';

const UsersContainer = ({
	getUsers,
	currentPage,
	pageSize,
	totalUsersCount,
	users,
	followingInProgress,
	follow,
	unfollow,
	setUsers,
}) => {
	// Получение списка пользователей при рендере
	useEffect(() => {
		getUsers(currentPage, pageSize);
		return () => {
			setUsers(null);
		};
	}, [getUsers, currentPage, pageSize, setUsers]);

	// Получение списка пользователей при выборе страницы
	const onPageChanged = (pageNumber) => {
		getUsers(pageNumber, pageSize);
	};
	return (
		<Users
			totalUsersCount={totalUsersCount}
			pageSize={pageSize}
			currentPage={currentPage}
			onPageChanged={onPageChanged}
			users={users}
			defaultAvatar={defaultAvatar}
			followingInProgress={followingInProgress}
			follow={follow}
			unfollow={unfollow}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		currentPage: state.usersPage.currentPage,
		users: state.usersPage.users,
		followingInProgress: state.usersPage.followingInProgress,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
	};
};

export default connect(mapStateToProps, {
	follow,
	unfollow,
	getUsers,
	setUsers,
})(UsersContainer);
