import React, { useState, useEffect } from 'react';
import styles from './Profile.module.scss';

const ProfileStatus = ({ status, updateUserStatus, isMyProfile }) => {
	const [editMode, setEditMode] = useState(false);
	const [statusInState, setStatusInState] = useState(status);
	const activateEditMode = () => {
		setEditMode(true);
	};
	const deactivateEditMode = () => {
		setEditMode(false);
		updateUserStatus(statusInState);
	};
	const onStatusChange = (e) => {
		setStatusInState(e.currentTarget.value);
	};
	useEffect(() => {
		setStatusInState(status);
	}, [status]);
	return (
		<>
			{editMode ? (
				<div className={styles.status}>
					<input
						onChange={onStatusChange}
						autoFocus
						onBlur={deactivateEditMode}
						value={statusInState}
					/>
				</div>
			) : status || isMyProfile ? (
				<div className={styles.status}>
					<span
						onDoubleClick={isMyProfile ? activateEditMode : undefined}
						title={isMyProfile ? 'Double click to change your status' : ''}
						className={
							isMyProfile ? (status ? styles.myStatus : styles.enterStatus) : ''
						}
					>
						{status || 'Enter your status...'}
					</span>
				</div>
			) : undefined}
		</>
	);
};

export default React.memo(ProfileStatus);
