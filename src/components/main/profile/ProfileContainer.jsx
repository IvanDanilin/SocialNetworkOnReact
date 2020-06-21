import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	getUserProfileToView,
	getUserStatusToView,
	updateUserStatus,
	getMyStatus,
	getMyUserProfile,
} from '../../../redux/profileReduser';
import topImage from './les_tuman_derevia.jpg';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getAuthUserData } from '../../../redux/authReduser';

// Классовый компонент для рендера функционального компонента
class ProfileContainer extends React.Component {
	// Выполняется после рендера
	componentDidMount() {
		const userId = this.props.match.params.userId;
		if (userId) {
			this.props.getUserProfileToView(userId);
			this.props.getUserStatusToView(userId);
		} else if (!userId) {
			// ! Временное решение /////////////
			this.props.getAuthUserData().then((data) => {
				if (data.id) {
					this.props.getMyUserProfile(data.id);
					this.props.getMyStatus(data.id);
				}
			});
		}
	}
	render() {
		const userId = this.props.match.params.userId;
		const profile = userId ? this.props.profileToView : this.props.myProfile;
		const status = userId ? this.props.statusToView : this.props.myStatus;
		return <Profile {...this.props} profile={profile} status={status} />;
	}
}

// Данные из state передаваемые в props компонента
const mapStateToProps = (state) => ({
	profileToView: state.profilePage.profileToView,
	myProfile: state.profilePage.myProfile,
	topImage,
	defaultAvatar,
	statusToView: state.profilePage.statusToView,
	myStatus: state.profilePage.myStatus,
});

export default compose(
	// Добавляет данные из state и actions для dispatchs
	connect(mapStateToProps, {
		getUserProfileToView,
		getUserStatusToView,
		updateUserStatus,
		getAuthUserData,
		getMyUserProfile,
		getMyStatus,
	}),
	// Добавляет возможность получения параметров переданных в адресную строку
	withRouter,
	// Добавляет в компонент проверку аутентификации, если не авторизован
	// выполняет редирект на страницу входа
	withAuthRedirect
)(ProfileContainer);
