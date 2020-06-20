import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
	profile: null,
	status: '',
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

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };

		case SET_STATUS:
			return { ...state, status: action.status };

		default:
			return state;
	}
};

export default profileReduser;

export const addPost = (text) => ({ type: ADD_POST, text });

const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});

const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});

// Thunks

export const getUserProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfileData(userId).then((data) => {
			dispatch(setUserProfile(data));
		});
	};
};

export const getUserStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then((data) => {
			dispatch(setStatus(data));
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
