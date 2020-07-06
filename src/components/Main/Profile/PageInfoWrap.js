import React, { useState } from 'react';
import styles from './Profile.module.scss';
import ProfileStatus from './ProfileStatus';
import { Form, Field } from 'react-final-form';
import { Textarea, Input } from '../../common/FormControls/FormControls';

const Contacts = ({ contacts, pageEditMode }) => {
	let itemExist = false;
	let items;
	if (contacts) {
		items = Object.entries(contacts).map((contact) => {
			if (contact[1] || pageEditMode) {
				itemExist = true;
				return (
					<div key={contact[0]} className={styles.contactsItem}>
						<span>{`${contact[0]}: `}</span>
						{pageEditMode ? (
							<Field component={Input} name={`contacts.${contact[0]}`} />
						) : (
							contact[1]
						)}
					</div>
				);
			} else {
				return null;
			}
		});
	}

	return itemExist || pageEditMode ? (
		<div className={styles.contactsBlock}>
			<div className={styles.contactsTitle}>Contacts:</div>
			{items}
		</div>
	) : (
		''
	);
};

const AboutMe = ({
	aboutMe,
	lookingForAJob,
	lookingForAJobDescription,
	pageEditMode,
}) => {
	return (
		<div className={styles.aboutMeBlock}>
			{pageEditMode ? (
				<div className={styles.pageInfoRow}>
					<span>About me:</span>
					<Field component={Textarea} name='aboutMe' placeholder='About me' />
				</div>
			) : aboutMe ? (
				<div className={styles.pageInfoRow}>
					<span>About me:</span> {aboutMe}
				</div>
			) : (
				''
			)}
			<div className={styles.pageInfoRow}>
				<span>Looking for a job: </span>
				{pageEditMode ? (
					<Field
						component={'input'}
						type={'checkbox'}
						name={'lookingForAJob'}
					/>
				) : lookingForAJob ? (
					'Yes'
				) : (
					'No'
				)}
			</div>
			{pageEditMode ? (
				<Field
					component={Textarea}
					name='lookingForAJobDescription'
					placeholder='Description'
				/>
			) : lookingForAJobDescription ? (
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
	pageEditMode,
	aboutMe,
	lookingForAJob,
	lookingForAJobDescription,
	contacts,
	submitError,
}) => {
	return (
		<div className={styles.personalInfoWrap}>
			<div className={styles.topBorder}>
				Personal information
				{isMyProfile && !pageEditMode && (
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
					pageEditMode={pageEditMode}
					aboutMe={aboutMe}
					lookingForAJob={lookingForAJob}
					lookingForAJobDescription={lookingForAJobDescription}
				/>

				<Contacts
					pageEditMode={pageEditMode}
					contacts={contacts}
					isMyProfile={isMyProfile}
				/>
			</div>

			{pageEditMode && (
				<>
					<button type='submit' className={styles.saveButton}>
						Save
					</button>
					<button
						onClick={() => setPageEditMode(false)}
						className={styles.cancelButton}
						type='button'
					>
						Cancel
					</button>
					{submitError && <div className={styles.error}>{submitError}</div>}
				</>
			)}
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
	pageEditMode,
	setPageEditMode,
	submitError,
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
			<div className={styles.avatar}>
				<img
					src={photos ? photos.large || defaultAvatar : defaultAvatar}
					alt='avatar'
				/>
				{isMyProfile && <input type='file' onChange={onMyPhotoSelected} />}
			</div>

			<div className={styles.pageInfoWrap}>
				<div className={styles.pageName}>
					{pageEditMode ? (
						<Field component='input' name='fullName' />
					) : (
						fullName
					)}
				</div>

				<ProfileStatus
					isMyProfile={isMyProfile}
					status={status}
					updateUserStatus={updateUserStatus}
				/>
				<PersonalInfoWrap
					isMyProfile={isMyProfile}
					setPageEditMode={setPageEditMode}
					pageEditMode={pageEditMode}
					aboutMe={aboutMe}
					lookingForAJob={lookingForAJob}
					lookingForAJobDescription={lookingForAJobDescription}
					contacts={contacts}
					submitError={submitError}
				/>
			</div>
		</div>
	);
};

const PageInfoWrapWithEditMode = (props) => {
	// Переключатель режима редактирования информации пользователя
	const [pageEditMode, setPageEditMode] = useState(false);

	const {
		contacts,
		fullName,
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
	} = props.profile;

	return pageEditMode ? (
		<Form
			initialValues={{
				contacts,
				fullName,
				aboutMe,
				lookingForAJob,
				lookingForAJobDescription,
			}}
			onSubmit={async (payload) => {
				const error = await props.changeUserData(payload);
				if (error) {
					return error;
				}
			}}
			render={({ handleSubmit, submitError }) => (
				<form onSubmit={handleSubmit}>
					<PageInfoWrap
						{...props}
						pageEditMode={pageEditMode}
						setPageEditMode={setPageEditMode}
						submitError={submitError}
					/>
				</form>
			)}
		/>
	) : (
		<PageInfoWrap
			setPageEditMode={setPageEditMode}
			pageEditMode={pageEditMode}
			{...props}
		/>
	);
};

export default PageInfoWrapWithEditMode;
