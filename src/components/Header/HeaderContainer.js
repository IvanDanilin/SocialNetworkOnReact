import React, { useState } from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../../assets/image/defaultAvatar.png';
import logo from '../../assets/image/logo.svg';
import {
	signOut,
	toggleSignOutInProcess,
} from '../../redux/reducers/authReducer';
import { getMyUserProfile } from '../../redux/reducers/profileReducer';
import Header from './Header';
import menuButtonImg from '../../assets/image/menu-button.svg' 

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
			toggleSignOutInProcess={props.toggleSignOutInProcess}
			menuButtonImg={menuButtonImg}
			setMainMenuIsActive={props.setMainMenuIsActive}
		/>
	);
};

const mapStateToProps = (state) => ({
	defaultAvatar,
	avatar: state.profilePage.myProfile.photos.small,
	isAuth: state.auth.isAuth,
	userId: state.auth.userId,
	fullName: state.profilePage.myProfile.fullName,
	logo,
});

export default connect(mapStateToProps, {
	signOut,
	getMyUserProfile,
	toggleSignOutInProcess,
})(HeaderContainer);
