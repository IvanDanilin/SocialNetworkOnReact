import { usersAPI } from '../../api/api';
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
	users: null,
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	followingInProgress: [],
};

const { reducer, actions } = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// *Принимает юзеров для отрисовки
		setUsers: (state, action) => {
			state.users = action.payload;
		},
		// *Уснановка выбранной страницы
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		// *Количество всех пользователей
		setTotalUsersCount(state, action) {
			state.totalUsersCount = action.payload;
		},
		// *Переключатель запроса при нажатии на кнопку follow/onfollow
		toggleIsFollowingProgress: {
			reducer(state, action) {
				// Если true, то добавляет userId в массив. True приходит,
				// при нажатии на кнопку, перед запросом на сервер.
				// Если userId находится в массиве, кнопка отключается
				// для данного пользователя. После того как придет ответ с
				// сервера, приходит false и userId из массива удаляется
				action.payload.followingInProgress
					? state.followingInProgress.push(action.payload.userId)
					: (state.followingInProgress = state.followingInProgress.filter(
							(id) => id !== action.payload.userId
					  ));
			},
			prepare: (followingInProgress, userId) => ({
				payload: { followingInProgress, userId },
			}),
		},
		// *Подписка
		followSuccess(state, action) {
			// если id юзера совпадает, с переданным id
			// в state.users возвращает копию данного юзера
			// в которой отмечается подписка на него
			state.users = state.users.map((user) =>
				action.payload === user.id ? { ...user, followed: true } : user
			);
		},
		// *Отписка
		unfollowSuccess(state, action) {
			// если id юзера совпадает, с переданным id
			// в state.users возвращает копию данного юзера
			// в которой отмечается подписка на него
			state.users = state.users.map((user) =>
				action.payload === user.id ? { ...user, followed: false } : user
			);
		},
	},
});

export default reducer;

export const {
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFollowingProgress,
	followSuccess,
	unfollowSuccess,
} = actions;

// * Thunks
// Получение пользователей с сервера, передача их в state
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setUsers(null)); // Обнуление юзеров
	dispatch(setCurrentPage(currentPage)); // установка текущей страницы
	const data = await usersAPI.getUsers(currentPage, pageSize); // Запрос пользователей
	dispatch(setUsers(data.items)); // Передает полученных пользователей в state
	dispatch(setTotalUsersCount(data.totalCount)); // Передает общее количество пользователей в state
};

export const follow = (id) => async (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, id));
	const resultCode = await usersAPI.follow(id);
	if (resultCode === 0) {
		dispatch(followSuccess(id));
	}
	dispatch(toggleIsFollowingProgress(false, id));
};

export const unfollow = (id) => async (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, id));
	const resultCode = await usersAPI.unfollow(id);
	if (resultCode === 0) {
		dispatch(unfollowSuccess(id));
	}
	dispatch(toggleIsFollowingProgress(false, id));
};
