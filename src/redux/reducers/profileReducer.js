import { profileAPI } from '../../api/api';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	myProfile: { photos: {} },
	profile: null,
	status: '',
	isMyProfile: false,
	existingPosts: [
		{ id: 0, textPost: 'Lorem ipsum dolor', amountLikes: 54 },
		{
			id: 1,
			textPost: 'Lorem ipsum dolor, sit amet consectetur',
			amountLikes: 64,
		},
		{ id: 2, textPost: 'I like JS and React', amountLikes: 516 },
		{
			id: 3,
			textPost: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
			amountLikes: 5,
		},
		{
			id: 4,
			textPost:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum incidunt nam saepe unde similique, eaque quisquam nostrum ducimus aliquid quas illum ea amet dignissimos, impedit fugit nemo tenetur nobis architecto.',
			amountLikes: 32,
		},
		{
			id: 5,
			textPost:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum incidunt nam saepe unde similique, eaque quisquam nostrum ducimus aliquid quas illum ea amet dignissimos, impedit fugit nemo tenetur nobis architecto.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum incidunt nam saepe unde similique, eaque quisquam nostrum ducimus aliquid quas illum ea amet dignissimos, impedit fugit nemo tenetur nobis architecto.',
			amountLikes: 32,
		},
		{
			id: 6,
			textPost:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum incidunt nam saepe unde similique, eaque quisquam nostrum ducimus aliquid quas illum ea amet dignissimos, impedit fugit nemo tenetur nobis architecto.',
			amountLikes: 32,
		},
	],
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addPost(state, action) {
			state.existingPosts.push({
				id: state.existingPosts.length,
				textPost: action.payload,
				amountLikes: 0,
			});
		},
		setUserProfile(state, action) {
			state.profile = action.payload;
		},
		setMyUserProfile(state, action) {
			state.myProfile = action.payload;
		},
		setStatus(state, action) {
			state.status = action.payload;
		},
	},
});

const { actions, reducer } = profileSlice;

export default reducer;

export const { addPost, setUserProfile, setMyUserProfile, setStatus } = actions;

// Thunks
export const getProfile = (userId) => (dispatch) => {
	const getUserProfilePromise = dispatch(getUserProfile(userId));
	const getUserStatusPromise = dispatch(getUserStatus(userId));
	return Promise.all([getUserProfilePromise, getUserStatusPromise]).then(
		() => true
	);
};

export const getUserProfile = (userId) => {
	return (dispatch) => {
		dispatch(setUserProfile(null));
		profileAPI.getProfileData(userId).then((data) => {
			dispatch(setUserProfile(data));
		});
	};
};

export const getUserStatus = (userId) => {
	return (dispatch) => {
		dispatch(setStatus(null));
		profileAPI.getStatus(userId).then((data) => {
			dispatch(setStatus(data));
		});
	};
};

export const getMyUserProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfileData(userId).then((data) => {
			dispatch(setMyUserProfile(data));
		});
	};
};

export const updateUserStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then((response) => {
			if (response.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
	};
};
