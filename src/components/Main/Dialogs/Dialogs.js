import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../../assets/image/defaultAvatar.png';
import styles from './Dialogs.module.scss';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import useScrollToTop from '../../../utilities/useScrollToTop';
import { Avatar } from '@material-ui/core';

const Dialogs = (props) => {
	useScrollToTop();
	return (
		<div className={styles.dialogs}>
			<ul>
				{props.dialogs.map((dialog) => {
					const id = dialog.id;
					const message =
						dialog.messagesAll[dialog.messagesAll.length - 1].message;
					return (
						<li className={styles.dialogItem} key={id}>
							<NavLink to={'/dialog/' + id}>
								<div className={styles.dialogLink}>
									<Avatar src={props.defaultAvatar} alt="" />
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

const mapStateToProps = (state) => ({
	dialogs: state.dialogs,
	defaultAvatar,
});

export default compose(connect(mapStateToProps), withAuthRedirect)(Dialogs);
