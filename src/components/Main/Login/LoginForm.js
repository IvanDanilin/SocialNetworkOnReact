import React from 'react';
import styles from './Login.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import Button from '@material-ui/core/Button';
import {
	TextField,
	InputAdornment,
	IconButton,
	FormControl,
	InputLabel,
	OutlinedInput,
	FormHelperText,
	Checkbox,
	FormControlLabel,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const LoginFormValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Must be a valid email')
		.required('Required')
		.max(30, 'Must be 30 characters or less'),
	password: yup
		.string()
		.required('Required')
		.max(30, 'Must be 30 characters or less'),
});

// Отдельная валидация для капчи, когда сервер запрашивает капчу,
// нужно повесить Required, если сделать это в общей валидации,
// форма не будет отправляться, даже если сервер еще не запросил капчу
// и поле для ее ввода еще не отобразилось
const validateCaptcha = (value) => {
	let error;
	if (!value) {
		error = 'Required';
	} else if (value.length > 15) {
		error = 'Must be 30 characters or less';
	}
	return error;
};

const LoginForm = (props) => (
	<>
		{props.loading && <Preloader />}
		<Formik
			initialValues={{
				rememberMe: true,
				email: '',
				password: '',
				captcha: '',
			}}
			validationSchema={LoginFormValidationSchema}
			onSubmit={({ email, password, rememberMe, captcha }, actions) =>
				props.onSubmit({ email, password, rememberMe, captcha }, actions)
			}
		>
			{({
				handleSubmit,
				errors,
				touched,
				values,
				isSubmitting,
				status,
				handleReset,
				setFieldValue,
			}) => {
				return (
					<form onSubmit={handleSubmit}>
						<div className={styles.inputWrap}>
							<Field
								className={styles.textField}
								name="email"
								type="email"
								as={TextField}
								placeholder="Enter your email"
								error={Boolean(
									(errors.email && touched.email) || errors.emailServer
								)}
								label="Email"
								variant="outlined"
								helperText={touched.email && errors.email}
							/>
						</div>
						<div className={styles.inputWrap}>
							<FormControl
								className={styles.textField}
								variant="outlined"
								error={
									Boolean(errors.password && touched.password) ||
									errors.passwordServer
								}
							>
								<InputLabel htmlFor="sign-in-password">Password</InputLabel>
								<Field
									id="sign-in-password"
									name="password"
									as={OutlinedInput}
									type={values.passwordShown ? 'text' : 'password'}
									placeholder="Enter your password"
									labelWidth={65}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												onMouseDown={() => {
													if (values.passwordShown) {
														setFieldValue('passwordShown', false);
													} else {
														setFieldValue('passwordShown', true);
													}
												}}
											>
												{values.passwordShown ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
								<FormHelperText>
									{touched.password && errors.password}
								</FormHelperText>
							</FormControl>
						</div>
						<div className={styles.checkboxWrap}>
							<FormControlLabel
								label="Remember me"
								name="rememberMe"
								control={
									<Field
										as={Checkbox}
										color="primary"
										checked={values.rememberMe ? true : false}
									/>
								}
							/>
						</div>
						{props.captchaUrl && (
							<div className={styles.captcha}>
								<div>
									<Field
										className={styles.textField}
										as={TextField}
										name="captcha"
										label={'Type the characters below'}
										error={Boolean(
											(errors.captcha && touched.captcha) ||
												errors.captchaServer
										)}
										validate={validateCaptcha}
										variant="outlined"
										helperText={touched.captcha && errors.captcha}
									/>
								</div>
								<div className={styles.captchaImg}>
									<button type="button" onClick={props.getCaptcha}>
										<img src={props.refreshImg} alt="" />
									</button>
									<img src={props.captchaUrl} alt="Captcha" />
								</div>
							</div>
						)}
						<div className={styles.buttons}>
							<Button
								type="submit"
								disabled={isSubmitting}
								variant="contained"
								color="primary"
							>
								Log in
							</Button>
							<Button
								onClick={handleReset}
								type="button"
								disabled={isSubmitting}
								variant="contained"
								color="primary"
							>
								Reset
							</Button>
						</div>
						<div className={styles.error}>{status}</div>
					</form>
				);
			}}
		</Formik>
	</>
);

export default LoginForm;
