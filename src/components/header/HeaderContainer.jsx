import React from 'react';
import logo from '../../assets/image/logo.png';
import Header from './Header';
import { connect } from 'react-redux';
import { signOut } from '../../redux/auth-reducer';
import defaultAvatar from '../../assets/image/defaultAvatar.jpg';
import { getMyUserProfile } from '../../redux/profile-reducer';

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
		isAuth: state.auth.isAuth,
		userId: state.auth.userId,
		login: state.auth.login,
		avatar: state.profilePage.myProfile.photos.small,
		defaultAvatar: defaultAvatar,
	};
};

export default connect(mapStateToProps, { signOut, getMyUserProfile })(
	HeaderContainer
);
