import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	follow,
	unfollow,
	getUsers,
} from '../../../redux/reducers/usersReducer';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';

const UsersContainer = ({
	getUsers,
	currentPage,
	pageSize,
	totalUsersCount,
	isFetching,
	users,
	followingInProgress,
	follow,
	unfollow,
}) => {
	// Получение списка пользователей при рендере
	useEffect(() => {
		getUsers(currentPage, pageSize);
	}, [getUsers, currentPage, pageSize]);

	// Получение списка пользователей при выборе страницы
	const onPageChanged = (pageNumber) => {
		getUsers(pageNumber, pageSize);
	};

	return (
		<>
			{isFetching ? (
				<Preloader />
			) : (
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
			)}
		</>
	);
};

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
