import React from 'react';
import { Field, Form } from 'react-final-form';
import { fullValidation } from '../../../utilities/validators/validators';
import { Input } from '../../common/FormControls/FormControls';
import styles from './Login.module.scss';

const LoginForm = (props) => (
	<Form
		initialValues={{
			rememberMe: true,
		}}
		onSubmit={(values) => props.onSubmit(values)}
		render={({ handleSubmit, pristine, form, submitting, submitError }) => (
			<form onSubmit={handleSubmit}>
				<div>
					<Field
						name="email"
						component={Input}
						placeholder="Enter your email"
						validate={fullValidation(3, 30, 'Required field')}
					/>
				</div>
				<div>
					<Field
						name="password"
						component={Input}
						type="password"
						placeholder="Enter your password"
						validate={fullValidation(3, 30, 'Required field')}
					/>
				</div>
				<div>
					<label>
						<Field type="checkbox" component="input" name="rememberMe" />{' '}
						Remember me
					</label>
				</div>
				<button type="submit" disabled={submitting}>
					Log in
				</button>
				<button
					type="button"
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
