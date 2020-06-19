import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
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
				<div className={styles.loginBlock}>
					{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
				</div>
			</div>
		</header>
	);
};

export default Header;
