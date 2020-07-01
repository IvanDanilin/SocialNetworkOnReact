import profileReducer, { addPost } from './profileReducer';

const state = {
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

describe('profileReducer', () => {
	test('length of posts should be incremented', () => {
		// test data
		const action = addPost('Hi, how are you?');
		// action
		const newState = profileReducer(state, action);
		// expection
		expect(newState.existingPosts.length).toBe(8);
	});

	test('text of new post should be correct', () => {
		// test data
		const action = addPost('Hi, how are you?');
		// action
		const newState = profileReducer(state, action);
		// expection
		expect(newState.existingPosts[7].textPost).toBe('Hi, how are you?');
	});
});
