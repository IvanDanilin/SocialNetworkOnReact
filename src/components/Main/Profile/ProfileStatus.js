import React, { useState } from 'react';
import styles from './Profile.module.scss';
import { Form, Field } from 'react-final-form';

const ProfileStatus = ({ status, updateUserStatus, isMyProfile }) => {
	const [editMode, setEditMode] = useState(false);
	const activateEditMode = () => {
		setEditMode(true);
	};
	return (
		<>
			{editMode ? (
				<div className={styles.status}>
					<Form
						initialValues={{
							status: status,
						}}
						onSubmit={({ status }, form) => {
							if (status !== form.getState().initialValues.status) {
								updateUserStatus(status);
							}
							setEditMode(false);
						}}
						render={({ handleSubmit }) => (
							<Field
								onBlur={handleSubmit}
								autoFocus
								component='input'
								name='status'
								maxLength='300'
								parse={(value) => value}
							/>
						)}
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
