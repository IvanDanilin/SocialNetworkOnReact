import React, { useState, useEffect } from 'react';

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
				<div>
					<input
						onChange={onStatusChange}
						autoFocus
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>
			) : props.status || props.isMyProfile ? (
				<div>
					<span
						onDoubleClick={props.isMyProfile ? activateEditMode : undefined}
					>
						{props.status || 'Enter your status...'}
					</span>
				</div>
			) : undefined}
		</>
	);
};

export default ProfileStatus;
