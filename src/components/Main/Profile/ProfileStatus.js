import React, { useState } from 'react';
import styles from './Profile.module.scss';
import { Formik, Field } from 'formik';

const ProfileStatus = ({ status, updateUserStatus, isMyProfile }) => {
	const [editMode, setEditMode] = useState(false);
	const activateEditMode = () => {
		setEditMode(true);
	};
	return (
		<>
			{editMode ? (
				<div className={styles.status}>
					<Formik
						initialValues={{
							status: status,
						}}
						onSubmit={({ status }, form) => {
								updateUserStatus(status);
							setEditMode(false);
						}}
					>
						{({ handleSubmit }) => (
								<Field
									onBlur={handleSubmit}
									autoFocus
									component='input'
									name='status'
									maxLength='300'
								/>
						)}
					</Formik>
				</div>
			) : status || isMyProfile ? (
				<div className={styles.status}>
					<span
						onClick={isMyProfile ? activateEditMode : undefined}
						title={isMyProfile ? 'Click to change your status' : ''}
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
