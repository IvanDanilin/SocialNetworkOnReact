import React, { useState } from 'react';
import styles from './PageInfo.module.scss';
import { Formik, Field } from 'formik';
import cn from 'classnames';

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
								component="input"
								name="status"
								maxLength="300"
							/>
						)}
					</Formik>
				</div>
			) : status || isMyProfile ? (
				<div className={styles.status}>
					<span
						onClick={isMyProfile ? activateEditMode : undefined}
						title={isMyProfile ? 'Click to change your status' : ''}
						className={cn({
							[styles.myStatus]: isMyProfile,
							[styles.enterStatus]: !status,
						})}
					>
						{status || 'Enter your status...'}
					</span>
				</div>
			) : undefined}
		</>
	);
};

export default React.memo(ProfileStatus);
