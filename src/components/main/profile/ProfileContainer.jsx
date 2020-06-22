import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getAuthUserData } from '../../../redux/auth-reducer';
import {
	getUserProfile,
	getUserStatus,
	updateUserStatus,
	toggleIsMyProfile,
} from '../../../redux/profile-reducer';
import topImage from './les_tuman_derevia.jpg';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
	state = {
		id: +this.props.match.params.userId,
	};
	updateViewProfile() {
		const userId = +this.props.match.params.userId;
		// Получение id из адресной строки (если есть)
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
		const userId = +this.props.match.params.userId;
		if (userId) {
			this.updateViewProfile();
		}
	}
	componentDidUpdate() {
		const userId = +this.props.match.params.userId;
		if (userId && this.state.id !== userId) {
			this.setState({ id: userId });
			this.updateViewProfile();
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
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	topImage,
	defaultAvatar,
	isAuth: state.auth.isAuth,
	authUserId: state.auth.userId,
	isMyProfile: state.profilePage.isMyProfile,
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
	// Добавляет в компонент проверку аутентификации, если не авторизован
	// выполняет редирект на страницу входа
	withAuthRedirect
)(ProfileContainer);
