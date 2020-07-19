import React, { useRef } from 'react';
import styles from './Header.module.scss';
import useOutsideClick from '../../utilities/useOutsideClick';
import { Box } from '@material-ui/core';
import LinkItem from '../common/LinkItem/LinkItem';

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
	const onClickSignOut = async () => {
		hideDropDownMenu();
		props.toggleSignOutInProcess(true);
		try {
			await props.signOut();
		} catch (error) {
			props.toggleSignOutInProcess(false);
		}
		props.toggleSignOutInProcess(false);
	};

	const CustomLink = (props) => (
		<li>
			<LinkItem
				{...props}
				activeClassName={styles.active}
				onClick={hideDropDownMenu}
			/>
		</li>
	);

	return (
		<Box
			color="primary.dark"
			ref={dropDownMenuMenuRef}
			className={styles.dropDownMenu}
		>
			<ul>
				<CustomLink to={`/profile/${props.userId}`} linkName="Profile" />
				<CustomLink to={'/settings'} linkName="Settings" />
				<li>
					<div onClick={onClickSignOut}>Sign out</div>
				</li>
			</ul>
		</Box>
	);
};

export default DropDownMenu;
