import { authAPI } from '../../api/api';
import { getMyUserProfile, setMyUserProfile } from './profileReducer';
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authSlice = createSlice({
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
	},
});

const { actions, reducer } = authSlice;

const { setAuthUserData } = actions;

export default reducer;

// Thunks
export const getAuthUserData = () => (dispatch) =>
	authAPI.getAuthUserData().then((data) => {
		if (data.resultCode === 0) {
			let { id, login, email } = data.data;
			dispatch(setAuthUserData(id, email, login, true));
			dispatch(getMyUserProfile(id));
			return { id, login, email };
		} else {
			return false;
		}
	});

export const signIn = (authData) => {
	return (dispatch) => {
		return authAPI.signIn(authData).then((data) => {
			if (data.resultCode === 0) {
				dispatch(getAuthUserData());
			} else if (data.resultCode !== 0) {
				return data.messages[0];
			}
		});
	};
};

export const signOut = () => {
	return (dispatch) => {
		authAPI.signOut().then((data) => {
			if (data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false));
				setMyUserProfile(null);
			} else {
				console.log('error');
			}
		});
	};
};
