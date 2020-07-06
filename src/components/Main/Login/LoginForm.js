import React from 'react';
import { Field, Form } from 'react-final-form';
import {
	fullValidation,
	required,
} from '../../../utilities/validators/validators';
import { Input } from '../../common/FormControls/FormControls';
import styles from './Login.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const LoginForm = (props) => (
	<Form
		initialValues={{
			rememberMe: true,
			passwordShown: false,
		}}
		onSubmit={({ email, password, rememberMe, captcha }) =>
			props.onSubmit({ email, password, rememberMe, captcha })
		}
		render={({
			handleSubmit,
			pristine,
			form,
			submitting,
			submitError,
			values,
		}) => (
			<form onSubmit={handleSubmit}>
				{props.loading && <Preloader />}
				<div className={styles.textInputWrap}>
					<Field
						name='email'
						component={Input}
						placeholder='Enter your email'
						validate={fullValidation(3, 30, 'Required field')}
					/>
				</div>
				<div className={styles.textInputWrap}>
					<Field
						name='password'
						component={Input}
						type={values.passwordShown ? 'text' : 'password'}
						placeholder='Enter your password'
						validate={fullValidation(3, 30, 'Required field')}
					/>
				</div>
				<div>
					<label>
						<Field type='checkbox' component='input' name='passwordShown' />{' '}
						Show password
					</label>
				</div>
				<div>
					<label>
						<Field type='checkbox' component='input' name='rememberMe' />{' '}
						Remember me
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
								component={Input}
								name='captcha'
								validate={required('Requred field')}
								placeholder='Type the characters above'
							/>
						</div>
					</div>
				)}
				<div className={styles.buttons}>
					<button type='submit' disabled={submitting}>
						Log in
					</button>
					<button
						type='button'
						disabled={pristine || submitting}
						onClick={form.reset}
					>
						Clear
					</button>
				</div>
				<div className={styles.error}>{submitError && submitError}</div>
			</form>
		)}
	/>
);

export default LoginForm;
