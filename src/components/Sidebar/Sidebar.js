import React, { useRef } from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as cn from 'classnames';
import useOutsideClick from '../../utilities/useOutsideClick';

const Sidebar = (props) => {
	const mainMenuRef = useRef();
	useOutsideClick(mainMenuRef, () => {
		if (props.mainMenuIsActive) {
			props.setMainMenuIsActive(false);
		}
	});
	const onCklickToLink = () => {
		if (props.mainMenuIsActive) {
			props.setMainMenuIsActive(false);
		}
	};
	return (
		<aside
			ref={mainMenuRef}
			className={cn(styles.sidebar, {
				[styles.menuIsActive]: props.mainMenuIsActive,
			})}
		>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					{props.isAuth && (
						<>
							<li onClick={onCklickToLink}>
								<NavLink
									to={`/profile/${props.userId}`}
									activeClassName={styles.active}
								>
									Profile
								</NavLink>
							</li>
							<li onClick={onCklickToLink}>
								<NavLink to='/dialogs' activeClassName={styles.active}>
									Dialogs
								</NavLink>
							</li>
							<li onClick={onCklickToLink}>
								<NavLink to='/news' activeClassName={styles.active}>
									News
								</NavLink>
							</li>
							<li onClick={onCklickToLink}>
								<NavLink to='/music' activeClassName={styles.active}>
									Music
								</NavLink>
							</li>
						</>
					)}
					<li onClick={onCklickToLink}>
						<NavLink to='/users' activeClassName={styles.active}>
							Users
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

const mapDispatchToProps = (state) => ({
	isAuth: state.auth.isAuth,
	userId: state.auth.userId,
});

export default connect(mapDispatchToProps)(Sidebar);
