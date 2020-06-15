import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../redux/profileReduser';
import topImage from './les_tuman_derevia.jpg';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

// Классовый компонент для рендера функционального компонента
class ProfileContainer extends React.Component {
	// Выполняется после рендера
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userId;
		}
		this.props.getUserProfile(userId);
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
	userId: state.auth.userId,
});

export default compose(
	// Добавляет данные из state и actions для dispatchs
	connect(mapStateToProps, { getUserProfile }),
	// Добавляет возможность получения параметров переданных в адресную строку
	withRouter,
	// Добавляет в компонент проверку аутентификации, если не авторизован
	// выполняет редирект на страницу входа
	withAuthRedirect
)(ProfileContainer);
