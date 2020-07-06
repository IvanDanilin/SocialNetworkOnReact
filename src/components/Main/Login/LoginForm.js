import React from 'react';
import { Input } from '../../common/FormControls/FormControls';
import styles from './Login.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import * as yup from 'yup';
import { Formik, Field } from 'formik';

const LoginFormValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email()
		.required('Required')
		.max(30, 'Must be 30 characters or less'),
	password: yup
		.string()
		.required('Required')
		.max(30, 'Must be 30 characters or less'),
});

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
				passwordShown: false,
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
			}) => {
				return (
					<form onSubmit={handleSubmit}>
						<div className={styles.inputWrap}>
							<Field
								name='email'
								type='email'
								as={Input}
								placeholder='Enter your email'
								error={errors.email}
								touched={touched.email}
								serverError={status === 'Incorrect Email or Password'}
							/>
						</div>
						<div className={styles.inputWrap}>
							<Field
								name='password'
								as={Input}
								type={values.passwordShown ? 'text' : 'password'}
								placeholder='Enter your password'
								error={errors.password}
								touched={touched.password}
								serverError={status === 'Incorrect Email or Password'}
							/>
						</div>
						<div className={styles.inputWrap}>
							<label>
								<Field type='checkbox' name='passwordShown' /> Show password
							</label>
						</div>
						<div className={styles.inputWrap}>
							<label>
								<Field type='checkbox' name='rememberMe' /> Remember me
							</label>
						</div>
						{props.captchaUrl && (
							<div className={styles.captcha}>
								<div className={styles.captchaImg}>
									<button type='button' onClick={props.getCaptcha}>
										<img src={props.refreshImg} alt='' />
									</button>
									<img src={props.captchaUrl} alt='Captcha' />
								</div>
								<div className={styles.textInputWrap}>
									<Field
										as={Input}
										name='captcha'
										placeholder={'Type the characters above'}
										error={errors.captcha}
										touched={touched.captcha}
										validate={validateCaptcha}
										serverError={status === 'Incorrect anti-bot symbols'}
									/>
								</div>
							</div>
						)}
						<div className={styles.buttons}>
							<button type='submit' disabled={isSubmitting}>
								Log in
							</button>
							<button
								onClick={handleReset}
								type='button'
								disabled={isSubmitting}
							>
								Reset
							</button>
						</div>
						<div className={styles.error}>{status}</div>
					</form>
				);
			}}
		</Formik>
	</>
);

export default LoginForm;
