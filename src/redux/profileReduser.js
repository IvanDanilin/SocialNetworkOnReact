import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE_TO_VIEW = 'SET_USER_PROFILE_TO_VIEW';
const SET_STATUS_TO_VIEW = 'SET_STATUS_TO_VIEW';
const SET_MY_USER_PROFILE = 'SET_MY_USER_PROFILE';
const SET_MY_STATUS = 'SET_MY_STATUS';

const initialState = {
	myProfile: {
		photos: {
			small: null,
			large: null,
		},
		contacts: '',
	},
	myStatus: '',
	profileToView: null,
	statusToView: '',
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

const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			// Добавляет новый пост на стену
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

		case SET_USER_PROFILE_TO_VIEW:
			return { ...state, profileToView: action.profile };

		case SET_STATUS_TO_VIEW:
			return { ...state, statusToView: action.status };

		case SET_MY_USER_PROFILE:
			return { ...state, myProfile: action.profile };

		case SET_MY_STATUS:
			return { ...state, myStatus: action.status };

		default:
			return state;
	}
};

export default profileReduser;

export const addPost = (text) => ({ type: ADD_POST, text });

const setUserProfileToView = (profile) => ({
	type: SET_USER_PROFILE_TO_VIEW,
	profile,
});

const setStatusToView = (status) => ({
	type: SET_STATUS_TO_VIEW,
	status,
});

const setMyUserProfile = (profile) => ({
	type: SET_MY_USER_PROFILE,
	profile,
});

const setMyStatus = (status) => ({
	type: SET_MY_STATUS,
	status,
});

// Thunks

export const getUserProfileToView = (userId) => {
	return (dispatch) => {
		profileAPI.getProfileData(userId).then((data) => {
			dispatch(setUserProfileToView(data));
		});
	};
};

export const getUserStatusToView = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then((data) => {
			dispatch(setStatusToView(data));
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

export const getMyStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then((data) => {
			dispatch(setMyStatus(data));
		});
	};
};

export const updateUserStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then((response) => {
			if (response.resultCode === 0) {
				dispatch(setMyStatus(status));
			}
		});
	};
};
