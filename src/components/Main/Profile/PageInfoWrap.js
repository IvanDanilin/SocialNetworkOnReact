import React, { useState, useEffect } from 'react';
import styles from './Profile.module.scss';
import ProfileStatus from './ProfileStatus';
import { Textarea, Input } from '../../common/FormControls/FormControls';
import { Formik, Field } from 'formik';
import cn from 'classnames';

const Contacts = ({ contacts, pageEditMode, touched, errors, values }) => {
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
							<Field
								as={Input}
								name={`contacts.${contact[0]}`}
								value={values.contacts[contact[0]] || ''}
								error={errors && errors.contacts && errors.contacts[contact[0]]}
								touched={
									touched && touched.contacts && touched.contacts[contact[0]]
								}
							/>
						) : (
							contact[1]
						)}
					</div>
				);
			} else {
				return '';
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
	touched,
	errors,
}) => {
	return (
		<div className={styles.aboutMeBlock}>
			{aboutMe || pageEditMode ? (
				<div className={styles.pageInfoRow}>
					<span>About me:</span>
					{pageEditMode ? (
						<Field
							as={Textarea}
							name='aboutMe'
							placeholder='About me'
							error={errors.aboutMe}
							touched={touched.aboutMe}
						/>
					) : (
						aboutMe
					)}
				</div>
			) : (
				''
			)}
			<div className={styles.pageInfoRow}>
				<span>Looking for a job: </span>
				{pageEditMode ? (
					<Field type={'checkbox'} name={'lookingForAJob'} />
				) : lookingForAJob ? (
					'Yes'
				) : (
					'No'
				)}
			</div>
			{pageEditMode ? (
				<Field
					as={Textarea}
					name='lookingForAJobDescription'
					placeholder='Description'
					error={errors.lookingForAJobDescription}
					touched={touched.lookingForAJobDescription}
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
	touched,
	errors,
	values,
}) => {
	const [errorIndex, setErrorIndex] = useState(0);
	const [blinkError, setBlinkError] = useState(false);

	useEffect(() => {
		let mainTimeout;
		let blinkTumeout;
		if (errors && errors.any && errors.any.length > 1) {
			mainTimeout = setTimeout(() => {
				if (errors && errors.any && errorIndex < errors.any.length - 1) {
					setErrorIndex(errorIndex + 1);
					setBlinkError(true);
					blinkTumeout = setTimeout(() => {
						setBlinkError(false);
					}, 500);
				} else {
					setErrorIndex(0);
					setBlinkError(true);
					blinkTumeout = setTimeout(() => {
						setBlinkError(false);
					}, 500);
				}
			}, 2000);
		}
		return () => {
			clearTimeout(mainTimeout);
			clearTimeout(blinkTumeout);
		};
	}, [errors, errorIndex]);

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
					errors={errors}
					touched={touched}
				/>

				<Contacts
					pageEditMode={pageEditMode}
					contacts={contacts}
					isMyProfile={isMyProfile}
					errors={errors}
					touched={touched}
					values={values}
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
					<div className={styles.errorsWrap}>
						{errors.any ? (
							<div
								className={cn(styles.errors, {
									[styles.blinkError]: blinkError,
								})}
							>
								{errors.any[errorIndex]}
							</div>
						) : (
							''
						)}
					</div>
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
	touched,
	errors,
	values,
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
						<Field
							as={Input}
							name='fullName'
							placeholder={'Your name'}
							error={errors.fullName}
							touched={touched.fullName}
						/>
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
					errors={errors}
					touched={touched}
					values={values}
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
		<Formik
			initialValues={{
				contacts,
				fullName,
				aboutMe,
				lookingForAJob,
				lookingForAJobDescription,
			}}
			onSubmit={async (values, actions) => {
				const error = await props.changeUserData(values);
				if (error) {
					actions.setErrors(error);
				}
			}}
		>
			{({ handleSubmit, errors, touched, values }) => {
				console.log(errors);

				return (
					<form onSubmit={handleSubmit}>
						<PageInfoWrap
							{...props}
							pageEditMode={pageEditMode}
							setPageEditMode={setPageEditMode}
							errors={errors}
							touched={touched}
							values={values}
						/>
					</form>
				);
			}}
		</Formik>
	) : (
		<PageInfoWrap
			setPageEditMode={setPageEditMode}
			pageEditMode={pageEditMode}
			{...props}
		/>
	);
};

export default PageInfoWrapWithEditMode;
