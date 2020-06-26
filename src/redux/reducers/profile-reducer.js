import { profileAPI } from '../../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_MY_USER_PROFILE = 'SET_MY_USER_PROFILE';

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

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const text = action.text;
			const newPostId = state.existingPosts.length;
			return {
				...state,
				existingPosts: [
					...state.existingPosts,
					{
						id: newPostId,
						textPost: text,
						amountLikes: 0,
					},
				],
			};

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };

		case SET_MY_USER_PROFILE:
			return { ...state, myProfile: action.profile };

		case SET_STATUS:
			return { ...state, status: action.status };

		default:
			return state;
	}
};

export default profileReducer;

export const addPost = (text) => ({ type: ADD_POST, text });

const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});

export const setMyUserProfile = (profile) => ({
	type: SET_MY_USER_PROFILE,
	profile,
});

const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});

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
