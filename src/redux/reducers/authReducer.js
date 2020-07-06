import { authAPI, securityAPI } from '../../api/api';
import { getMyUserProfile, setMyUserProfile } from './profileReducer';
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null,
};

const { actions, reducer } = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthUserData: {
			reducer: (state, action) => ({ ...state, ...action.payload }),
			prepare: (userId, email, login, isAuth) => ({
				payload: {
					userId,
					email,
					login,
					isAuth,
				},
			}),
		},
		setCaptcha(state, action) {
			state.captchaUrl = action.payload;
		},
	},
});

const { setAuthUserData, setCaptcha } = actions;

export default reducer;

// Thunks
export const getAuthUserData = () => async (dispatch) => {
	const data = await authAPI.getAuthUserData();
	if (data.resultCode === 0) {
		let { id, login, email } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
		dispatch(getMyUserProfile(id));
		return { id, login, email };
	} else {
		return false;
	}
};
export const getCaptcha = () => async (dispatch) => {
	const captchaUrl = await securityAPI.getCaptcha();
	dispatch(setCaptcha(captchaUrl));
};

export const signIn = (authData) => async (dispatch) => {
	const data = await authAPI.signIn(authData);
	if (data.resultCode === 0) {
		dispatch(getAuthUserData());
		dispatch(setCaptcha(null));
	} else if (data.resultCode === 10) {
		dispatch(getCaptcha());
		return data.messages[0];
	} else {
		return data.messages[0];
	}
};

export const signOut = () => async (dispatch) => {
	const data = await authAPI.signOut();
	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
		setMyUserProfile(null);
	} else {
		console.log('logout error');
	}
};
