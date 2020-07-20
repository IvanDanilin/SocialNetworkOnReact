import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	login,
	avatar,
	header,
	headerContent,
	logoBlock,
	logoImage,
	logoName,
	loginBlock,
	menuButton,
	isExist,
} from './Header.module.scss';
import DropDownMenu from './DropDownMenu';
import cn from 'classnames';
import { Box, Avatar } from '@material-ui/core';
import LinkItem from '../common/LinkItem/LinkItem';

const AuthUserInfo = (props) => {
	return (
		<>
			<div className={login}>{props.fullName}</div>
			<div className={avatar}>
				<Avatar src={props.avatar || props.defaultAvatar} alt="" />
			</div>
		</>
	);
};

const Header = ({
	toggleDropDownMenu,
	logo,
	fullName,
	avatar,
	defaultAvatar,
	dropDownMenu,
	isAuth,
	signOut,
	userId,
	toggleSignOutInProcess,
	menuButtonImg,
	setMainMenuIsActive,
}) => {
	const onClickProfileMenuButton = () => {
		toggleDropDownMenu(true);
	};
	const onClickMainMenuButton = () => {
		setMainMenuIsActive(true);
	};
	return (
		<Box component="header" className={header} bgcolor="primary.dark">
			<div className={headerContent}>
				<div className={logoBlock}>
					<div className={menuButton} onClick={onClickMainMenuButton}>
						<img src={menuButtonImg} alt="button" />
					</div>
					<div className={logoImage}>
						<img src={logo} alt="logo" />
					</div>
					<LinkItem
						to={`/profile/${userId}`}
						className={logoName}
						linkName={'WhoIAm'}
					/>
				</div>
				{isAuth ? (
					<div
						className={cn(loginBlock, { [isExist]: isAuth })}
						onClick={onClickProfileMenuButton}
					>
						<AuthUserInfo
							fullName={fullName}
							avatar={avatar}
							defaultAvatar={defaultAvatar}
							dropDownMenu={dropDownMenu}
						/>
					</div>
				) : (
					<div className={loginBlock}>
						<NavLink to={'/login'}>Login</NavLink>
					</div>
				)}
				{isAuth && dropDownMenu && (
					<DropDownMenu
						signOut={signOut}
						toggleDropDownMenu={toggleDropDownMenu}
						userId={userId}
						toggleSignOutInProcess={toggleSignOutInProcess}
					/>
				)}
			</div>
		</Box>
	);
};

export default Header;
