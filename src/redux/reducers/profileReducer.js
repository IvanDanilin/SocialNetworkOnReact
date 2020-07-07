import { createSlice } from '@reduxjs/toolkit';
import { profileAPI } from '../../api/api';

const initialState = {
	errorDownloadProfile: false,
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
		setErrorDownloadProfile(state, action) {
			state.errorDownloadProfile = action.payload;
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
	setErrorDownloadProfile,
} = actions;

// Thunks
export const getProfile = (userId) => async (dispatch) => {
	try {
		await Promise.all([
			dispatch(getUserProfile(userId)),
			dispatch(getUserStatus(userId)),
		]);
	} catch (error) {
		dispatch(setErrorDownloadProfile(true));
	}
};

export const getUserProfile = (userId) => async (dispatch) => {
	dispatch(setUserProfile(null));
	const data = await profileAPI.getProfileData(userId);
	if (data) {
		dispatch(setUserProfile(data));
	}
};

export const getUserStatus = (userId) => async (dispatch) => {
	dispatch(setStatus(null));
	const data = await profileAPI.getStatus(userId);
	if (data) {
		dispatch(setStatus(data));
	}
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

export const changeUserData = (payload) => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	const response = await profileAPI.sendUserData(payload);
	if (response.resultCode === 0) {
		dispatch(getUserProfile(userId));
		dispatch(getMyUserProfile(userId));
		// Обработка ошибок
	} else {
		// Объект для передачи ошибок в форму
		const errors = { any: [] };
		// Перебор массива ошибок (приходит с сервера)
		response.messages.forEach((error) => {
			// * Если в тексте ошибки есть Contacts
			if (error.includes('Contacts->')) {
				// Если в объекте errors еще не создан объект contacts
				if (!errors.contacts) {
					// Создание объекта для ошибок контактов
					errors.contacts = {};
				}
				// Вырезаем из текста ошибки название контакта
				let contactName = error.split('>')[1].split(')')[0];
				// Меняем первую букву названия на строчную
				contactName = contactName.toLowerCase()[0] + contactName.substring(1);
				// Вырезаем текст ошибки
				const errorText = error.split('(')[0];
				// Добавляем ошибку в объект ошибок
				errors.contacts[contactName] = errorText;
				// * Если ошибка не связана с контактами, проверяем связь
				// * с другими полями формы
			} else if (
				error.includes('Looking') ||
				error.includes('About') ||
				error.includes('FullName')
			) {
				// Вырезаем название формы
				let fildName = error.split('(')[1].split(')')[0];
				// Первая буква строчная
				fildName = fildName.toLowerCase()[0] + fildName.substring(1);
				// Вырезаем текст ошибки
				const errorText = error.split('(')[0];
				// Добавляем в объект ошибок
				errors[fildName] = errorText;
				// * Если связь с полями формы была не найдена, добавляем ошибку
				// * в ошибку формы
			}
			// Добавляем ошибки в общий массив
			errors.any.push(error);
		});
		return errors;
	}
};
