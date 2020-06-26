import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import topImage from '../../../assets/image/les_tuman_derevia.jpg';
import { getAuthUserData } from '../../../redux/reducers/auth-reducer';
import {
	addPost,
	getProfile,
	updateUserStatus,
} from '../../../redux/reducers/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import Profile from './Profile';

const ProfileContainer = (props) => {
	// Id из адресной строки
	const userId = +props.match.params.userId;

	// Индикатор профиля авторизованного пользователя
	const [isMyProfile, setIsMyProfile] = useState(false);

	// Выполняется при первом рендере и после каждого изменения id в адресной строке
	useEffect(() => {
		// Если в адресной строке есть id
		if (userId) {
			// Если id авторизованного пользователя и id в адресной строке совпадает
			// Указывает, что это профиль пользователя
			if (props.authUserId === userId) {
				setIsMyProfile(true);
			}
			// Запрос данных пользователя
			props.getProfile(userId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId]);

	// Если пользователь выполнил выход
	useEffect(() => {
		if (!props.isAuth) {
			setIsMyProfile(false);
		}
	}, [props.isAuth]);

	// Если в адресной строке указан id
	if (userId) {
		return props.profile ? (
			// Если данные профиля получены
			<Profile {...props} isMyProfile={isMyProfile} />
		) : (
			// Если идет получение данных
			<Preloader />
		);
	} else {
		// Если в адресной строке не указан id
		return props.isAuth ? (
			// Редирект на профиль авторизованного пользователя
			<Redirect to={`/profile/${props.authUserId}`} />
		) : (
			// Если не авторизован, редирект на страницу логинизации
			<Redirect to="/login" />
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
};

export default compose(
	React.memo,
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(ProfileContainer);
