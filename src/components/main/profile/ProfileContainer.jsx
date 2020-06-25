import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import { getAuthUserData } from '../../../redux/reducers/auth-reducer';
import {
	updateUserStatus,
	addPost,
	getProfile,
} from '../../../redux/reducers/profile-reducer';
import topImage from '../../../assets/image/les_tuman_derevia.jpg';
import Profile from './Profile';
import Preloader from '../../common/Preloader/Preloader';

const ProfileContainer = (props) => {
	const userId = +props.match.params.userId
	const [isMyProfile, setIsMyProfile] = useState(false);

	const checkProfile = () => {
		if (props.authUserId === userId) {
			setIsMyProfile(true);
		}
	};

	useEffect(() => {
		checkProfile();
		props.getProfile(userId);
	}, [userId]);

	return props.profile ? (
		<Profile {...props} isMyProfile={isMyProfile} />
	) : (
		<Preloader />
	);
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
	// Добавляет данные из state и actions для dispatchs
	connect(mapStateToProps, mapDispatchToProps),
	// Добавляет возможность получения параметров из адресной строки
	withRouter
)(ProfileContainer);
