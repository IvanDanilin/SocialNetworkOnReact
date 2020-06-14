import React from 'react';
import styles from './Users.module.scss';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

const Users = (props) => {
    
	const follow = (id) => {
		props.toggleIsFollowingProgress(true, id)
		usersAPI.follow(id).then((resultCode) => {
			if (resultCode === 0) {
				props.follow(id);
			}
			props.toggleIsFollowingProgress(false, id)
		});
	};

	const unfollow = (id) => {
		props.toggleIsFollowingProgress(true, id)
		usersAPI.unfollow (id).then((resultCode) => {
			if (resultCode === 0) {
				props.unfollow(id);
			}
			props.toggleIsFollowingProgress(false, id)
		});
	};


	return (
		<div className={styles.usersPage}>
			<div className={styles.pagination}>
				{props.pages.map((p) => {
					return (
						<span
							className={props.currentPage === p ? styles.selectedPage : ''}
                            onClick={() => props.onPageChanged(p)}
                            key={p}
						>
							{p}
						</span>
					);
				})}
			</div>

			<div>
				{props.users.map((u) => {
					return (
						<div key={u.id} className={styles.userBlock}>
							<div className={styles.photoBlock}>
								<div className={styles.photo}>
									<NavLink to={'/profile/' + u.id}>
										<img src={u.photos.small || props.defaultAvatar} alt="" />
									</NavLink>
								</div>

								{u.followed ? (
									<button
									disabled={props.followingInProgress.some(id => id === u.id)}
										onClick={() => {
											unfollow(u.id);
										}}
										className={`${styles.button} ${styles.unfollow}`}
									>
										Unfollow
									</button>
								) : (
									<button
									disabled={props.followingInProgress.some(id => id === u.id)}
										onClick={() => {
											follow(u.id);
										}}
										className={`${styles.button} ${styles.follow}`}
									>
										Follow
									</button>
								)}
							</div>
							<div className={styles.infoBlock}>
								<div className={styles.name}>{u.name}</div>
								<div>{u.status}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Users;
