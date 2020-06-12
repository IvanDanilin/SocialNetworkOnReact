const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
	profile: null,
	existingPosts: [
		{ id: 0, textPost: 'Hello! How are you?', amountLikes: 54 },
		{ id: 1, textPost: 'Yo! My name is Ivan.', amountLikes: 64 },
		{ id: 2, textPost: 'I like JS and React', amountLikes: 516 },
		{ id: 3, textPost: 'Watafak, mazafaka, suka, blya!', amountLikes: 5 },
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
	newPostText: '',
};

const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			// Добавляет новый пост на стену
			const currentText = state.newPostText;
			const newPostId = state.existingPosts.length;
			if (currentText) {
				return {
					...state,
					existingPosts: [
						...state.existingPosts,
						{
							id: newPostId,
							textPost: currentText,
							amountLikes: 0,
						},
					],
					newPostText: '',
				};
			}
			return state;

		case ON_POST_CHANGE:
			// Записывает в state и перерисовывыет любое изменение инпута нового поста
			return { ...state, newPostText: action.textPost };

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };

		default:
			return state;
	}
};

export default profileReduser;

export const addPost = () => ({ type: ADD_POST });

export const onPostChange = (text) => ({
	type: ON_POST_CHANGE,
	textPost: text,
});

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});
