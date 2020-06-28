import { usersAPI } from '../../api/api';
import { createSlice } from '@reduxjs/toolkit';


// Начальный state для запуска

let initialState = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// *Принимает юзеров для отрисовки
		setUsers: (state, action) => {
			state.users = [...action.payload];
		},
		// *Уснановка выбранной страницы
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		// *Количество всех пользователей
		setTotalUsersCount(state, action) {
			state.totalUsersCount = action.payload;
		},
		// *Переключатель запроса на сервер во время получения пользователей
		toggleIsFetching(state, action) {
			state.isFetching = action.payload;
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

const { reducer, actions } = usersSlice;

export default reducer;

export const {
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleIsFollowingProgress,
	followSuccess,
	unfollowSuccess,
} = actions;

// Thunks

// Получение пользователей с сервера, передача их в state
export const getUsers = (currentPage, pageSize) => {
	// Принимает текущую страницу и размер страницы
	return (dispatch) => {
		dispatch(setCurrentPage(currentPage));
		// Включает индикатор запроса на сервер
		dispatch(toggleIsFetching(true));
		// Передает данные в метод объекта usersAPI,
		// который используется для отправки запроса на сервер
		usersAPI.getUsers(currentPage, pageSize).then((data) => {
			// Выключает индикатор запроса на сервер, после того
			// как ответ получен
			dispatch(toggleIsFetching(false));
			// Передает полученных пользователей в state
			dispatch(setUsers(data.items));
			// Передает общее количество пользователей в state
			dispatch(setTotalUsersCount(data.totalCount));
		});
	};
};

// Подписка
export const follow = (id) => {
	// Принимает id
	return (dispatch) => {
		dispatch(toggleIsFollowingProgress(true, id));
		usersAPI.follow(id).then((resultCode) => {
			if (resultCode === 0) {
				dispatch(followSuccess(id));
			}
			dispatch(toggleIsFollowingProgress(false, id));
		});
	};
};
// Отписка
export const unfollow = (id) => {
	// Принимает id
	return (dispatch) => {
		dispatch(toggleIsFollowingProgress(true, id));
		usersAPI.unfollow(id).then((resultCode) => {
			if (resultCode === 0) {
				dispatch(unfollowSuccess(id));
			}
			dispatch(toggleIsFollowingProgress(false, id));
		});
	};
};
