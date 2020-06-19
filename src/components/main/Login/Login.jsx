import React from 'react';
import styles from './Login.module.scss';
import { Form, Field } from 'react-final-form';
import { authorize, getAuthUserData } from '../../../redux/authReduser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => (
	<Form
		initialValues={{
			email: '',
			password: '',
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
						component="input"
						type="text"
						placeholder="Enter your email"
					/>
				</div>
				<div>
					<Field
						name="password"
						component="input"
						type="password"
						placeholder="Enter your password"
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
		if (this.props.isAuth) {
			console.log('1');
			this.render();
		}
	};
	componentDidMount() {
		this.props.getAuthUserData();
		if (this.props.isAuth) {
			console.log('2');
			this.render();
		}
	}
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
