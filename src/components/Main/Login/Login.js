import { FORM_ERROR } from 'final-form';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
	getAuthUserData,
	signIn,
	getCaptcha,
} from '../../../redux/reducers/authReducer';
import styles from './Login.module.scss';
import LoginForm from './LoginForm';
import refreshImg from '../../../assets/image/refresh.svg';

const Login = (props) => {
	const [loading, setLoading] = useState(false);
	const onSubmit = async (values) => {
		setLoading(true);
		const error = await props.signIn(values);
		setLoading(false);
		if (error) {
			return { [FORM_ERROR]: error };
		}
	};

	return props.isAuth ? (
		<Redirect to={`/profile/${props.authUserId}`} />
	) : (
		<div className={styles.loginContainer}>
			<div className={styles.greeting}>
				<p>
					Welcome! For future use, enter the following data for authorization:
				</p>
				<p>
					Email: <mark>free@samuraijs.com</mark>
				</p>
				<p>
					Password: <mark>free</mark>
				</p>
			</div>
			<LoginForm
				refreshImg={refreshImg}
				captchaUrl={props.captchaUrl}
				onSubmit={onSubmit}
				loading={loading}
				getCaptcha={props.getCaptcha}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	authUserId: state.auth.userId,
	captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, {
	signIn,
	getAuthUserData,
	getCaptcha,
})(Login);
