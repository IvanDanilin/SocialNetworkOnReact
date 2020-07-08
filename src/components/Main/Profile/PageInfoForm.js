import React, { useState, useEffect } from 'react';
import styles from './PageInfoForm.module.scss';
import { Textarea, Input } from '../../common/FormControls/FormControls';
import { Formik, Field } from 'formik';
import cn from 'classnames';

const ErrorOutput = ({ errors }) => {
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
	);
};

const PageInfoForm = ({
	setPageEditMode,
	profile: {
		contacts,
		fullName,
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
	},
	changeUserData,
}) => {
	return (
		<Formik
			initialValues={{
				contacts,
				fullName,
				aboutMe,
				lookingForAJob,
				lookingForAJobDescription,
			}}
			onSubmit={async (values, actions) => {
				const error = await changeUserData(values);
				if (error) {
					actions.setErrors(error);
				}
			}}
		>
			{({ handleSubmit, errors, touched, values }) => (
				<div className={styles.pageInfoFormWrap}>
					<form onSubmit={handleSubmit}>
						<fieldset>
							<legend>Personal info</legend>
							<div className={cn(styles.fullName, styles.inputItem)}>
								<div className={styles.nameItem}>Your name: </div>
								<div className={styles.textField}>
									<Field
										as={Input}
										name='fullName'
										placeholder='Your name'
										error={errors.fullName}
										touched={touched.fullName}
									/>
								</div>
							</div>

							<div className={styles.aboutMeBlock}>
								<div className={styles.inputItem}>
									<div className={styles.nameItem}>About me: </div>
									<div className={styles.textField}>
										<Field
											as={Textarea}
											name='aboutMe'
											placeholder='About me'
											error={errors.aboutMe}
											touched={touched.aboutMe}
										/>
									</div>
								</div>

								<div className={styles.inputItem}>
									<label className={styles.nameItem} htmlFor='lookingForAJob'>
										Looking for a job:{' '}
									</label>
									<div className={styles.checkboxField}>
										<Field type='checkbox' name='lookingForAJob' />
									</div>
								</div>

								<div className={styles.inputItem}>
									<div className={styles.nameItem}>Your skills: </div>
									<div className={styles.textField}>
										<Field
											as={Textarea}
											name='lookingForAJobDescription'
											placeholder='Description'
											error={errors.lookingForAJobDescription}
											touched={touched.lookingForAJobDescription}
										/>
									</div>
								</div>
							</div>

							<div className={styles.contactsBlock}>
								<div className={styles.contactsTitle}>Contacts:</div>
								{Object.entries(contacts).map((contact) => {
									return (
										<div
											key={contact[0]}
											className={cn(styles.contactsItem, styles.inputItem)}
										>
											<div className={styles.nameItem}>{`${contact[0]}: `}</div>
											<div className={styles.textField}>
												<Field
													as={Input}
													name={`contacts.${contact[0]}`}
													value={values.contacts[contact[0]] || ''}
													error={
														errors &&
														errors.contacts &&
														errors.contacts[contact[0]]
													}
													touched={
														touched &&
														touched.contacts &&
														touched.contacts[contact[0]]
													}
												/>
											</div>
										</div>
									);
								})}
							</div>

							{/* Кнопки */}
							<div className={styles.buttons}>
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
							</div>
						</fieldset>

						<ErrorOutput errors={errors} />
					</form>
				</div>
			)}
		</Formik>
	);
};

export default PageInfoForm;
