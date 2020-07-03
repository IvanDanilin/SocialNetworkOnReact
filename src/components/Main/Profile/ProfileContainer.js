import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import topImage from '../../../assets/image/les_tuman_derevia.jpg';
import { getAuthUserData } from '../../../redux/reducers/authReducer';
import {
	addPost,
	getProfile,
	updateUserStatus,
	changeMyPhoto,
} from '../../../redux/reducers/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import Profile from './Profile';

const ProfileContainer = (props) => {
	const {
		match: {
			params: { userId },
		},
		authUserId,
		getProfile,
		isAuth,
		profile,
	} = props;

	const userIdInAddressBar = +userId;

	// Индикатор профиля авторизованного пользователя
	const [isMyProfile, setIsMyProfile] = useState(false);

	// Выполняется при первом рендере и после каждого изменения id в адресной строке
	useEffect(() => {
		// Если в адресной строке есть id
		if (userIdInAddressBar) {
			// Если id авторизованного пользователя и id в адресной строке совпадает
			// Указывает, что это профиль пользователя
			if (authUserId === userIdInAddressBar) {
				setIsMyProfile(true);
			}
			// Запрос данных пользователя
			getProfile(userIdInAddressBar);
		}
	}, [userIdInAddressBar, authUserId, getProfile]);

	// Если пользователь выполнил выход
	useEffect(() => {
		if (!isAuth) {
			setIsMyProfile(false);
		}
	}, [isAuth]);

	// Если в адресной строке указан id
	if (userIdInAddressBar) {
		return profile ? (
			// Если данные профиля получены
			<Profile {...props} isMyProfile={isMyProfile} />
		) : (
			// Если идет получение данных
			<Preloader />
		);
	} else {
		// Если в адресной строке не указан id
		return isAuth ? (
			// Редирект на профиль авторизованного пользователя
			<Redirect to={`/profile/${authUserId}`} />
		) : (
			// Если не авторизован, редирект на страницу логинизации
			<Redirect to='/login' />
		);
	}
};

// Данные из state передаваемые в props компонента
const mapStateToProps = (state) => ({
	topImage,
	defaultAvatar,
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	isAuth: state.auth.isAuth,
	authUserId: state.auth.userId,
	existingPosts: state.profilePage.existingPosts,
});

// Actions for dispatchs
const mapDispatchToProps = {
	updateUserStatus,
	getAuthUserData,
	addPost,
	getProfile,
	changeMyPhoto
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(ProfileContainer);
