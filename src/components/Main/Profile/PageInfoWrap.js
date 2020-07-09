import React from 'react';
import styles from './Profile.module.scss';
import ProfileStatus from './ProfileStatus';

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
						<span className={styles.contact}>{contact[1]}</span>
					</div>
				);
			} else {
				return '';
			}
		});
	}

	return itemExist ? (
		<div className={styles.contactsBlock}>
			<div className={styles.contactsTitle}>Contacts:</div>
			{items}
		</div>
	) : (
		''
	);
};

const AboutMe = ({ aboutMe, lookingForAJob, lookingForAJobDescription }) => {
	return (
		<div className={styles.aboutMeBlock}>
			{/* About me */}
			{aboutMe ? (
				<div className={styles.pageInfoRow}>
					<span>About me:</span>
					{aboutMe}
				</div>
			) : (
				''
			)}

			{/* Looking for a job */}
			<div className={styles.pageInfoRow}>
				<span>Looking for a job: </span>
				{lookingForAJob ? 'Yes' : 'No'}
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

const PersonalInfoWrap = ({
	isMyProfile,
	setPageEditMode,
	aboutMe,
	lookingForAJob,
	lookingForAJobDescription,
	contacts,
}) => {
	return (
		<div className={styles.personalInfoWrap}>
			<div className={styles.topBorder}>
				Personal information
				{/* Edit mode button */}
				{isMyProfile && (
					<button
						onClick={() => setPageEditMode(true)}
						className={styles.editModeButton}
						type='button'
					>
						Edit
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
	);
};

// Общий блок информации о пользователе
const PageInfoWrap = ({
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

	return (
		<div className={styles.pageWrap}>
			<div className={styles.page}>
				<div className={styles.pageHead}>
					{/* User photo */}
					<div className={styles.avatar}>
						<img
							src={photos ? photos.large || defaultAvatar : defaultAvatar}
							alt='avatar'
						/>
						{isMyProfile && (
							<>
								<input id='setPhoto' type='file' onChange={onMyPhotoSelected} />
								<label htmlFor='setPhoto'>Set photo</label>
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
				<PersonalInfoWrap
					isMyProfile={isMyProfile}
					setPageEditMode={setPageEditMode}
					aboutMe={aboutMe}
					lookingForAJob={lookingForAJob}
					lookingForAJobDescription={lookingForAJobDescription}
					contacts={contacts}
				/>
			</div>
		</div>
	);
};

export default PageInfoWrap;
