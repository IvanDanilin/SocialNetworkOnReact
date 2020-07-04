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
} from './Header.module.scss';
import DropDownMenu from './DropDownMenu';

const AuthUserInfo = (props) => {
	return (
		<>
			<div className={login}>{props.fullName}</div>
			<div className={avatar}>
				<img src={ props.avatar || props.defaultAvatar} alt='' />
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
}) => {	
	const onClick = () => {
		toggleDropDownMenu();
	};
	return (
		<header className={header}>
			<div className={headerContent}>
				<div className={logoBlock}>
					<div className={logoImage}>
						<img src={logo} alt='logo' />
					</div>
					<NavLink to={`/profile/${userId}`} className={logoName}>
						WhoIAm
					</NavLink>
				</div>
				{isAuth ? (
					<div className={loginBlock} onClick={onClick}>
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
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
