import React, { useState, useEffect } from 'react';
import styles from './PageInfo.module.scss';
import ProfileStatus from './ProfileStatus';
import cn from 'classnames';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { red, green } from '@material-ui/core/colors';

const PhotoFullWindow = ({ photo, setIsPhotoFullWindow }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => (document.body.style.overflow = 'auto');
	});

	return (
		<div
			className={styles.photoFullWindowWrap}
			onClick={() => setIsPhotoFullWindow(false)}
		>
			<div className={styles.photoFullwindow}>
				<img src={photo} alt="" />
			</div>
		</div>
	);
};

const Contacts = ({ contacts }) => {
	let itemExist = false;
	let items;
	if (contacts) {
		items = Object.entries(contacts).map((contact) => {
			if (contact[1]) {
				itemExist = true;
				return (
					<div key={contact[0]} className={styles.contactsItem}>
						<span className={styles.contactName}>{`${contact[0]}: `}</span>
						<a href={contact[1]} rel="noopener noreferrer" target="_blank">
							{contact[1]}
						</a>
					</div>
				);
			} else {
				return '';
			}
		});
	}

	return (
		<div className={styles.contactsBlock}>
			{itemExist ? (
				<>
					<div className={styles.topBorder}>Contacts</div>
					{items}
				</>
			) : (
				''
			)}
		</div>
	);
};

const AboutMe = ({ aboutMe, lookingForAJob, lookingForAJobDescription }) => {
	return (
		<div className={styles.aboutMeBlock}>
			{/* About me */}
			{aboutMe ? (
				<div className={styles.pageInfoRow}>
					<span>About me: </span>
					{aboutMe}
				</div>
			) : (
				''
			)}

			{/* Looking for a job */}
			<div className={styles.checkboxRow}>
				<span>Looking for a job </span>
				{lookingForAJob ? (
					<CheckCircleOutlineIcon style={{ color: green[400] }} />
				) : (
					<HighlightOffIcon style={{ color: red[400] }} />
				)}
			</div>

			{/* Looking for a job description */}
			{lookingForAJobDescription ? (
				<div className={styles.pageInfoRow}>{lookingForAJobDescription}</div>
			) : (
				''
			)}
		</div>
	);
};

// Общий блок информации о пользователе
const PageInfo = ({
	defaultAvatar,
	isMyProfile,
	status,
	updateUserStatus,
	changeMyPhoto,
	setPageEditMode,
	profile: {
		contacts,
		photos,
		fullName,
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
	},
}) => {
	// Функция для отправки фото профиля на сервер
	const onMyPhotoSelected = (e) => {
		if (e.target.files.length) {
			changeMyPhoto(e.target.files[0]);
		}
	};

	const [isPhotoFullWindow, setIsPhotoFullWindow] = useState(false);

	return (
		<>
			{isPhotoFullWindow && (
				<PhotoFullWindow
					setIsPhotoFullWindow={setIsPhotoFullWindow}
					photo={photos.large}
				/>
			)}
			<div className={styles.pageWrap}>
				<div className={styles.page}>
					<div className={styles.pageHead}>
						{/* User photo */}
						<div className={styles.avatar}>
							<img
								onClick={photos.large && (() => setIsPhotoFullWindow(true))}
								src={photos && (photos.large || defaultAvatar)}
								className={cn({ [styles.isExist]: photos.large })}
								alt="avatar"
							/>
							{isMyProfile && (
								<>
									<input
										id="setPhoto"
										type="file"
										onChange={onMyPhotoSelected}
									/>
									<label htmlFor="setPhoto">Set photo</label>
								</>
							)}
						</div>
						{/* Page info */}
						<div className={styles.mainInfo}>
							{/* User name */}
							<div className={styles.pageName}>{fullName}</div>

							{/* User status */}
							<ProfileStatus
								isMyProfile={isMyProfile}
								status={status}
								updateUserStatus={updateUserStatus}
							/>
						</div>
					</div>
					{/* User info */}
					<div className={styles.personalInfoWrap}>
						<div className={styles.infoTitle}>
							Personal information
							{/* Edit mode button */}
							{isMyProfile && (
								<button
									onClick={() => setPageEditMode(true)}
									className={styles.editModeButton}
									type="button"
								>
									<EditIcon color="primary" />
								</button>
							)}
						</div>

						<div className={styles.personalInfo}>
							<AboutMe
								aboutMe={aboutMe}
								lookingForAJob={lookingForAJob}
								lookingForAJobDescription={lookingForAJobDescription}
							/>

							<Contacts contacts={contacts} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageInfo;
