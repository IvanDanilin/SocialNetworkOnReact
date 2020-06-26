import React, { useState } from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../../assets/image/defaultAvatar.jpg';
import logo from '../../assets/image/logo.svg';
import { signOut } from '../../redux/reducers/auth-reducer';
import { getMyUserProfile } from '../../redux/reducers/profile-reducer';
import Header from './Header';

const HeaderContainer = (props) => {
	// Выпадающее меню справа. false - скрыто
	const [dropDownMenu, setDropDownMenu] = useState(false);
	// Переключатель выпадающего меню. Принимает значения True, False
	// Если значение не передано, переключает на противополжное
	const toggleDropDownMenu = (value) => {
		value
			? setDropDownMenu(value)
			: dropDownMenu
			? setDropDownMenu(false)
			: setDropDownMenu(true);
	};
	return (
		<Header
			{...props}
			toggleDropDownMenu={toggleDropDownMenu}
			dropDownMenu={dropDownMenu}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		defaultAvatar,
		avatar: state.profilePage.myProfile.photos.small,
		isAuth: state.auth.isAuth,
		userId: state.auth.userId,
		login: state.auth.login,
		logo
	};
};

export default connect(mapStateToProps, { signOut, getMyUserProfile })(
	HeaderContainer
);
