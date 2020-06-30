import React from 'react';
import styles from './Users.module.scss';
import { NavLink } from 'react-router-dom';
import Pagination from '../../common/Pagination/Pagination';

const Users = (props) => {
	return (
		<div className={styles.usersPage}>
			<Pagination
				pagesCount={props.pagesCount}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>

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
										disabled={props.followingInProgress.some(
											(id) => id === u.id
										)}
										onClick={() => {
											props.unfollow(u.id);
										}}
										className={`${styles.button} ${styles.unfollow}`}
									>
										Unfollow
									</button>
								) : (
									<button
										disabled={props.followingInProgress.some(
											(id) => id === u.id
										)}
										onClick={() => {
											props.follow(u.id);
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
