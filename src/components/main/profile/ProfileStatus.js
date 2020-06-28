import React, { useState, useEffect } from 'react';
import styles from './Profile.module.scss';

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);
	const activateEditMode = () => {
		setEditMode(true);
	};
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateUserStatus(status);
	};
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};
	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);
	return (
		<>
			{editMode ? (
				<div className={styles.status}>
					<input
						onChange={onStatusChange}
						autoFocus
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>
			) : props.status || props.isMyProfile ? (
				<div className={styles.status}>
					<span
						onDoubleClick={props.isMyProfile ? activateEditMode : undefined}
						title={
							props.isMyProfile ? 'Double click to change your status' : ''
						}
						className={
							props.isMyProfile
								? props.status
									? styles.myStatus
									: styles.enterStatus
								: ''
						}
					>
						{props.status || 'Enter your status...'}
					</span>
				</div>
			) : undefined}
		</>
	);
};

export default React.memo(ProfileStatus);
