import React from 'react';
import styles from './PageInfoForm.module.scss';
import { Formik, Field } from 'formik';
import useScrollToTop from '../../../../utilities/useScrollToTop';
import {
	TextField,
	Box,
	Checkbox,
	FormControlLabel,
	Button,
} from '@material-ui/core';
import * as yup from 'yup';

const PageInfoFormValidatioSchema = yup.object().shape({
	fullName: yup.string().required().max(100),
	aboutMe: yup.string().required().max(1000),
	lookingForAJobDescription: yup.string().required().max(1000),
});

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
	useScrollToTop();
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
			validationSchema={PageInfoFormValidatioSchema}
		>
			{({ handleSubmit, errors, touched, values }) => (
				<div className={styles.pageInfoFormWrap}>
					<form onSubmit={handleSubmit}>
						<Field
							className={styles.textField}
							as={TextField}
							name="fullName"
							error={Boolean(errors.fullName)}
							label="Your name"
							variant="outlined"
							helperText={errors.fullName}
						/>

						<div className={styles.aboutMeBlock}>
							<Field
								className={styles.textField}
								as={TextField}
								name="aboutMe"
								error={Boolean(errors.aboutMe)}
								multiline
								label="About me"
								variant="outlined"
								helperText={errors.aboutMe}
							/>

							<div>
								<FormControlLabel
									className={styles.checkboxField}
									label="Looking for a job"
									control={
										<Field
											name="lookingForAJob"
											color="primary"
											as={Checkbox}
											checked={values.lookingForAJob ? true : false}
										/>
									}
								/>
							</div>

							<Field
								className={styles.textField}
								as={TextField}
								name="lookingForAJobDescription"
								error={Boolean(errors.lookingForAJobDescription)}
								multiline
								label="Your skills"
								variant="outlined"
								helperText={errors.lookingForAJobDescription}
							/>
						</div>

						<div className={styles.contactsBlock}>
							<Box className={styles.contactsTitle}>Contacts:</Box>
							{Object.entries(contacts).map((contact) => {
								const contactName = contact[0];
								const label =
									contactName[0].toUpperCase() + contactName.slice(1);
								return (
									<Field
										className={styles.textField}
										key={contactName}
										as={TextField}
										name={`contacts.${contactName}`}
										value={values.contacts[contactName] || ''}
										error={Boolean(
											errors.contacts &&
												errors.contacts[contactName] &&
												touched.contacts &&
												touched.contacts[contactName]
										)}
										label={label}
										variant="outlined"
										helperText={errors.contacts && errors.contacts[contactName]}
									/>
								);
							})}
						</div>

						{/* Кнопки */}
						<div className={styles.buttons}>
							<Button color="primary" type="submit" variant="contained">
								Save
							</Button>
							<Button
								onClick={() => setPageEditMode(false)}
								type="button"
								variant="outlined"
								color="primary"
							>
								Cancel
							</Button>
						</div>
					</form>
				</div>
			)}
		</Formik>
	);
};

export default PageInfoForm;
