import React, { useRef } from 'react';
import styles from './Sidebar.module.scss';
import { connect } from 'react-redux';
import cn from 'classnames';
import useOutsideClick from '../../utilities/useOutsideClick';
import { Box } from '@material-ui/core';
import LinkItem from '../common/LinkItem/LinkItem';

const Sidebar = (props) => {
	// Ссылка на сайдбар
	const mainMenuRef = useRef();

	// Скрыть сайдбар если он активен
	const hideSidebar = () => {
		if (props.mainMenuIsActive) {
			props.setMainMenuIsActive(false);
		}
	};

	// Выполнить переданную функцию при клике вокруг элемента переданного через реф
	useOutsideClick(mainMenuRef, () => {
		hideSidebar();
	});

	const CustomLink = (props) => (
		<li>
			<LinkItem
				{...props}
				onClick={hideSidebar}
				activeClassName={styles.active}
			/>
		</li>
	);

	return (
		<aside
			ref={mainMenuRef}
			className={cn(styles.sidebar, {
				[styles.menuIsActive]: props.mainMenuIsActive,
			})}
		>
			<nav className={styles.nav}>
				<Box component="ul" color="primary.dark" className={styles.list}>
					{props.isAuth && (
						<>
							<CustomLink
								to={`/profile/${props.userId}`}
								linkName={'Profile'}
							/>
							<CustomLink to={'/dialogs'} linkName={'Dialogs'} />
							<CustomLink to={'/news'} linkName={'News'} />
							<CustomLink to={'/music'} linkName={'Music'} />
						</>
					)}
					<CustomLink to={'/users'} linkName={'Users'} />
				</Box>
			</nav>
		</aside>
	);
};

const mapDispatchToProps = (state) => ({
	isAuth: state.auth.isAuth,
	userId: state.auth.userId,
});

export default connect(mapDispatchToProps)(Sidebar);
