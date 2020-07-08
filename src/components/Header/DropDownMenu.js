import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import useOutsideClick from '../../utilities/useOutsideClick';

const DropDownMenu = (props) => {
	// Ссылка на выпадающее меню
	const dropDownMenuMenuRef = useRef();

	// Функция скрытия выпадающего меню
	const hideDropDownMenu = () => {
		props.toggleDropDownMenu(false);
	};

	// Хук, добавляющий слушателя событий на клик вне элемента
	// Принимает ref элемента и callback-функцию
	// Функция будет вызвана при клике на любую область
	// документа, кроме элемента переданного через ref
	useOutsideClick(dropDownMenuMenuRef, hideDropDownMenu);

	// Клик на Sign out
	const onClickSignOut = () => {
		props.signOut();
		hideDropDownMenu();
	};


	return (
		<div ref={dropDownMenuMenuRef} className={styles.dropDownMenu}>
			<ul>
				<li>
					<NavLink to={`/profile/${props.userId}`} onClick={hideDropDownMenu}>
						Profile
					</NavLink>
				</li>
				<li>
					<NavLink to='/settings' onClick={hideDropDownMenu}>
						Settings
					</NavLink>
				</li>
				<li onClick={onClickSignOut}>Sign out</li>
			</ul>
		</div>
	);
};

export default DropDownMenu;
