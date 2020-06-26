import { FORM_ERROR } from 'final-form';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAuthUserData, signIn } from '../../../redux/reducers/auth-reducer';
import styles from './Login.module.scss';
import LoginForm from './LoginForm';

class Login extends React.Component {
	onSubmit = (value) =>
		this.props.signIn(value).then((error) => {
			if (error) {
				return { [FORM_ERROR]: error };
			}
		});
	render() {
		if (this.props.isAuth) {
			return <Redirect to={`/profile/${this.props.authUserId}`} />;
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
	authUserId: state.auth.userId,
});

export default connect(mapStateToProps, { signIn, getAuthUserData })(Login);
