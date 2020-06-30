import { FORM_ERROR } from 'final-form';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAuthUserData, signIn } from '../../../redux/reducers/authReducer';
import styles from './Login.module.scss';
import LoginForm from './LoginForm';

const Login = (props) => {
	const onSubmit = async (values) => {
		const error = await props.signIn(values);
		if (error) {
			return { [FORM_ERROR]: error };
		}
	};

	return props.isAuth ? (
		<Redirect to={`/profile/${props.authUserId}`} />
	) : (
		<div className={styles.loginContainer}>
			<LoginForm onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	authUserId: state.auth.userId,
});

export default connect(mapStateToProps, { signIn, getAuthUserData })(Login);
