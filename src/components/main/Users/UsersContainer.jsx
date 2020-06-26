import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	follow,
	unfollow,
	getUsers,
} from '../../../redux/reducers/users-reducer';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';

const UsersContainer = (props) => {
	// Получение списка пользователей при рендере
	useEffect(() => {
		props.getUsers(props.currentPage, props.pageSize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Получение списка пользователей при выборе страницы
	const onPageChanged = (pageNumber) => {
		props.getUsers(pageNumber, props.pageSize);
	};
	// Кольчество страниц
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	return (
		<>
			{props.isFetching ? (
				<Preloader />
			) : (
				<Users
					pagesCount={pagesCount}
					currentPage={props.currentPage}
					onPageChanged={onPageChanged}
					users={props.users}
					defaultAvatar={defaultAvatar}
					followingInProgress={props.followingInProgress}
					follow={props.follow}
					unfollow={props.unfollow}
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
