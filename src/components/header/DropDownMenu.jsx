import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const DropDownMenu = (props) => {
	const hideDropDownMenu = () => {
		props.toggleDropDownMenu(false);
	};
	const onClick = () => {
		props.signOut();
		hideDropDownMenu();
	};
	return (
		<div className={styles.dropDownMenu}>
			<ul>
				<li>
					<NavLink to={`/profile/${props.userId}`} onClick={hideDropDownMenu}>
						Profile
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings" onClick={hideDropDownMenu}>
						Settings
					</NavLink>
				</li>
				<li onClick={onClick}>Sign out</li>
			</ul>
		</div>
	);
};

export default DropDownMenu;
