import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import { getAuthUserData } from '../../../redux/reducers/auth-reducer';
import {
	getUserProfile,
	getUserStatus,
	toggleIsMyProfile,
	updateUserStatus
} from '../../../redux/reducers/profile-reducer';
import topImage from './les_tuman_derevia.jpg';
import Profile from './Profile';

class ProfileContainer extends React.Component {
	state = {
		id: +this.props.match.params.userId,
	};
	updateViewProfile(userId) {
		if (userId !== this.props.authUserId) {
			// Если в адресной строке есть id, устанавливаем, что это чужой профиль
			this.props.isMyProfile && this.props.toggleIsMyProfile(false);
		} else {
			// Если в адресной строке не указан id получаем данные об авторизованном пользователе
			!this.props.isMyProfile && this.props.toggleIsMyProfile(true);
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}
	componentDidMount() {
		// Получение id из адресной строки
		const userId = +this.props.match.params.userId;
		if (userId) {
			this.updateViewProfile(userId);
		}
	}
	componentDidUpdate() {
		// Получение id из адресной строки
		const userId = +this.props.match.params.userId;
		if (userId && this.state.id !== userId) {
			this.setState({ id: userId });
			this.updateViewProfile(userId);
		}
	}
	render() {
		const userId = +this.props.match.params.userId;
		return userId ? (
			<Profile {...this.props} isMyProfile={this.props.isMyProfile} />
		) : this.props.isAuth ? (
			<Redirect to={`/profile/${this.props.authUserId}`} />
		) : (
			<Redirect to="/login" />
		);
	}
}

// Данные из state передаваемые в props компонента
const mapStateToProps = (state) => ({
	topImage,
	defaultAvatar,
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	isMyProfile: state.profilePage.isMyProfile,
	isAuth: state.auth.isAuth,
	authUserId: state.auth.userId,
});

// Actions for dispatchs
const mapDispatchToProps = {
	getUserProfile,
	getUserStatus,
	updateUserStatus,
	getAuthUserData,
	toggleIsMyProfile,
};

export default compose(
	// Добавляет данные из state и actions для dispatchs
	connect(mapStateToProps, mapDispatchToProps),
	// Добавляет возможность получения параметров из адресной строки
	withRouter,
)(ProfileContainer);
