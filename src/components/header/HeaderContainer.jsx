import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../../assets/image/defaultAvatar.jpg';
import logo from '../../assets/image/logo.svg';
import { signOut } from '../../redux/reducers/auth-reducer';
import { getMyUserProfile } from '../../redux/reducers/profile-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
	state = {
		dropDownMenu: false,
	};
	componentDidMount() {
		if (this.props.isAuth) {
			this.props.getMyUserProfile(this.props.userId);
		}
	}
	toggleDropDownMenu() {
		this.state.dropDownMenu
			? this.setState({ dropDownMenu: false })
			: this.setState({ dropDownMenu: true });
	}
	render() {
		return (
			<Header
				{...this.props}
				logo={logo}
				toggleDropDownMenu={this.toggleDropDownMenu.bind(this)}
				dropDownMenu={this.state.dropDownMenu}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		defaultAvatar,
		avatar: state.profilePage.myProfile.photos.small,
		isAuth: state.auth.isAuth,
		userId: state.auth.userId,
		login: state.auth.login,
	};
};

export default connect(mapStateToProps, { signOut, getMyUserProfile })(
	HeaderContainer
);
