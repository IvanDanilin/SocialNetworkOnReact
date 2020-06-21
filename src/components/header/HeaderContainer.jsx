import React from 'react';
import logo from '../../assets/image/logo.png';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, signOut } from '../../redux/authReduser';
import defaultAvatar from '../../assets/image/defaultAvatar.jpg';

class HeaderContainer extends React.Component {
	state = {
		dropDownMenu: false,
	};
	componentDidMount() {
		this.props.getAuthUserData();
	}
	toggleDropDownMenu() {
		this.state.dropDownMenu
			? this.setState({ dropDownMenu: false })
			: this.setState({ dropDownMenu: true });
		console.log(this.state);
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
		login: state.auth.login,
		avatar: state.profilePage.myProfile.photos.small,
		defaultAvatar: defaultAvatar,
	};
};

export default connect(mapStateToProps, { getAuthUserData, signOut })(
	HeaderContainer
);
