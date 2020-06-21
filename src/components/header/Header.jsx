import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const DropDownMenu = (props) => (
	<div className={styles.dropDownMenu}>
		<ul>
			<li>Profile</li>
			<li>Settings</li>
			<li onClick={props.signOut}>Sign out</li>
		</ul>
	</div>
);

const AuthLogin = (props) => {
	return (
		<>
			<div className={styles.login}>{props.login}</div>
			<div className={styles.avatar}>
				<img src={props.avatar || props.defaultAvatar} alt="" />
			</div>
		</>
	);
};

const Header = (props) => {
	const onClick = () => {
		props.toggleDropDownMenu();
	};
	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<div className={styles.logoBlock}>
					<div className={styles.logoImage}>
						<img src={props.logo} alt="logo" />
					</div>
					<NavLink to={'/profile'} className={styles.logoName}>
						WhoIAm
					</NavLink>
				</div>
				{props.isAuth ? (
					<div className={styles.loginBlock} onClick={onClick}>
						<AuthLogin
							login={props.login}
							avatar={props.avatar}
							defaultAvatar={props.defaultAvatar}
							dropDownMenu={props.dropDownMenu}
						/>
					</div>
				) : (
					<div className={styles.loginBlock}><NavLink to={'/login'}>Login</NavLink></div>
				)}
				{props.dropDownMenu && <DropDownMenu signOut={props.signOut} />}
			</div>
		</header>
	);
};

export default Header;
