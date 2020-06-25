import React from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidebar = (props) => {
	return (
		<aside className={styles.sidebar}>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li>
						{props.isAuth ? (
							<NavLink
								to={`/profile/${props.userId}`}
								activeClassName={styles.active}
							>
								Profile
							</NavLink>
						) : <NavLink
            to='/login'
            activeClassName={styles.active}
          >
            Profile
          </NavLink>}
					</li>
					<li>
						<NavLink to="/dialogs" activeClassName={styles.active}>
							Dialogs
						</NavLink>
					</li>
					<li>
						<NavLink to="/news" activeClassName={styles.active}>
							News
						</NavLink>
					</li>
					<li>
						<NavLink to="/music" activeClassName={styles.active}>
							Music
						</NavLink>
					</li>
					<li>
						<NavLink to="/settings" activeClassName={styles.active}>
							Settings
						</NavLink>
					</li>
					<li>
						<NavLink to="/users" activeClassName={styles.active}>
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
