import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import styles from './Dialogs.module.scss';

const Dialogs = (props) => {
	return (
		<div className={styles.dialogs}>
			<ul>
				{props.dialogs.map((dialog) => {
					const id = dialog.id;
					const message = dialog.messagesAll[dialog.messagesAll.length - 1].message;
					return (
						<li className={styles.dialogItem} key={id}>
							<NavLink to={'/dialog/' + id}>
								<div className={styles.dialogLink}>
									<div className={styles.dialogPhoto}>
										<img src={props.defaultAvatar} alt="" />
									</div>
									<div className={styles.dialogContent}>
										<div className={styles.dialogName}>{dialog.name}</div>
										<div className={styles.message}>{message}</div>
									</div>
								</div>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogs,
		defaultAvatar,
	};
};

export default connect(mapStateToProps)(Dialogs);
