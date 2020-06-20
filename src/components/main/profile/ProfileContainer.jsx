import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	getUserProfile,
	getUserStatus,
	updateUserStatus,
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
		// ! Временное решение /////////////
		let userId = this.props.match.params.userId;
		if (!userId) {
			this.props.getAuthUserData().then((id) => {
				if (id) {
					this.props.getUserProfile(id);
					this.props.getUserStatus(id);
				}
			});
		} else {
			this.props.getUserProfile(userId);
			this.props.getUserStatus(userId);
		}
	}
	render() {
		return <Profile {...this.props} />;
	}
}

// Данные из state передаваемые в props компонента
const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	topImage,
	defaultAvatar,
	status: state.profilePage.status,
});

export default compose(
	// Добавляет данные из state и actions для dispatchs
	connect(mapStateToProps, {
		getUserProfile,
		getUserStatus,
		updateUserStatus,
		getAuthUserData,
	}),
	// Добавляет возможность получения параметров переданных в адресную строку
	withRouter,
	// Добавляет в компонент проверку аутентификации, если не авторизован
	// выполняет редирект на страницу входа
	withAuthRedirect
)(ProfileContainer);
