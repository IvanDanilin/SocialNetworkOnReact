import { authAPI } from '../../api/api';
import { getMyUserProfile, setMyUserProfile } from './profile-reducer';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;

const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});

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
