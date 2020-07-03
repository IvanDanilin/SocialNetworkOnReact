import { FORM_ERROR } from 'final-form';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAuthUserData, signIn } from '../../../redux/reducers/authReducer';
import styles from './Login.module.scss';
import LoginForm from './LoginForm';
import Preloader from '../../common/Preloader/Preloader';

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
			<LoginForm onSubmit={onSubmit} loading={loading} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	authUserId: state.auth.userId,
});

export default connect(mapStateToProps, { signIn, getAuthUserData })(Login);
