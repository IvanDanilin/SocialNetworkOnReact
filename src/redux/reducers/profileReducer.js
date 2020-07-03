import { createSlice } from '@reduxjs/toolkit';
import { profileAPI } from '../../api/api';

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

const { actions, reducer } = createSlice({
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
		updatePhoto(state, action) {
			state.profile.photos = action.payload.data.photos;
			state.myProfile.photos = action.payload.data.photos;
		},
	},
});

export default reducer;

export const {
	addPost,
	setUserProfile,
	setMyUserProfile,
	setStatus,
	updatePhoto,
} = actions;

// Thunks
export const getProfile = (userId) => async (dispatch) => {
	await Promise.all([
		dispatch(getUserProfile(userId)),
		dispatch(getUserStatus(userId)),
	]);
	return true;
};

export const getUserProfile = (userId) => async (dispatch) => {
	dispatch(setUserProfile(null));
	const data = await profileAPI.getProfileData(userId);
	dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
	dispatch(setStatus(null));
	const data = await profileAPI.getStatus(userId);
	dispatch(setStatus(data));
};

export const getMyUserProfile = (userId) => async (dispatch) => {
	const data = await profileAPI.getProfileData(userId);
	dispatch(setMyUserProfile(data));
};

export const updateUserStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const changeMyPhoto = (file) => async (dispatch) => {
	const response = await profileAPI.changeMyPhoto(file);
	if (response.data.resultCode === 0) {
		dispatch(updatePhoto(response.data));
	}
};
