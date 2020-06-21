import React from 'react';
import styles from './Login.module.scss';
import { Form, Field } from 'react-final-form';
import { signIn, getAuthUserData } from '../../../redux/authReduser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input } from '../../common/FormControls/FormControls';
import { fullValidation } from '../../../utilities/validators/validators';
import { FORM_ERROR } from 'final-form';

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

class Login extends React.Component {
	onSubmit = (value) =>
		this.props.signIn(value).then((error) => {
			if (error) {
				return { [FORM_ERROR]: error };
			}
		});

	render() {
		if (this.props.isAuth) {
			return <Redirect to="/profile" />;
		}
		return (
			<div className={styles.loginContainer}>
				<LoginForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { signIn, getAuthUserData })(Login);
