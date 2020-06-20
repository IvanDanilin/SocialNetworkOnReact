import React from 'react';
import styles from './Login.module.scss';
import { Form, Field } from 'react-final-form';
import { authorize, getAuthUserData } from '../../../redux/authReduser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input } from '../../common/FormControls/FormControls';
import { composeValidators, maxLength, required, minLength } from '../../../utilities/validators/validators';

const LoginForm = (props) => (
	<Form
		initialValues={{
			rememberMe: true,
		}}
		onSubmit={(values) => props.onSubmit(values)}
		validate={(values) => console.log(values)}
	>
		{({ handleSubmit, pristine, form, submitting }) => (
			<form onSubmit={handleSubmit}>
				<div>
					<Field
						name="email"
						component={Input}
						placeholder="Enter your email"
						validate={composeValidators(
							minLength(3),
							maxLength(30),
							required('Required field')
						)}
					/>
				</div>
				<div>
					<Field
						name="password"
						component={Input}
						inputType="password"
						placeholder="Enter your password"
						validate={composeValidators(
							minLength(3),
							maxLength(30),
							required('Required field')
						)}
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
			</form>
		)}
	</Form>
);

class Login extends React.Component {
	onSubmit = (value) => {
		this.props.authorize(value);
	};
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

const mapDispatchToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapDispatchToProps, { authorize, getAuthUserData })(
	Login
);
