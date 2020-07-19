import React, { useState } from 'react';
import styles from './PageInfo.module.scss';
import { Formik, Field } from 'formik';
import cn from 'classnames';
import { FormControl, Input, FormHelperText } from '@material-ui/core';

const validateStatus = (value) => {
	if (value.length > 300) {
		return 'Must be 300 characters or less';
	}
};

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
						onSubmit={({ status }) => {
							setEditMode(false);
							updateUserStatus(status);
						}}
					>
						{({ handleSubmit, errors }) => (
							<FormControl className={styles.statusField} error={errors.status}>
								<Field
									onBlur={handleSubmit}
									autoFocus
									as={Input}
									name="status"
									placeholder="Status"
									validate={validateStatus}
								/>
								<FormHelperText>{errors.status}</FormHelperText>
							</FormControl>
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
