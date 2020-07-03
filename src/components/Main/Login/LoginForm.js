import React from 'react';
import { Field, Form } from 'react-final-form';
import { fullValidation } from '../../../utilities/validators/validators';
import { Input } from '../../common/FormControls/FormControls';
import styles from './Login.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const LoginForm = (props) => (
	<Form
		initialValues={{
			rememberMe: true,
			passwordShown: false,
		}}
		onSubmit={({ email, password, rememberMe }) =>
			props.onSubmit({ email, password, rememberMe })
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
				<div>
					<Field
						name='email'
						component={Input}
						placeholder='Enter your email'
						validate={fullValidation(3, 30, 'Required field')}
					/>
				</div>
				<div>
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
				{submitError && <div className={styles.error}>{submitError}</div>}
			</form>
		)}
	/>
);

export default LoginForm;
