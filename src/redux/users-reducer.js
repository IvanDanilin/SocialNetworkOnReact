import { usersAPI } from '../api/api';

// Переменные для action.type

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

// Начальный state для запуска

let initialState = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

// Reducer для управления state = store.state.usersPage

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		// *Подписка
		case FOLLOW:
			return {
				// Возвращает копию state перебирает юзеров
				// если id юзера совпадает, с переданным id
				// в state.users возвращает копию данного юзера
				// в которой отмечается подписка на него
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				}),
			};
		// *Отписка
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				}),
			};
		// *Принимает юзеров для отрисовки
		case SET_USERS:
			// Получает массив юзеров и добавляет его в state
			return {
				...state,
				users: [...action.users],
			};
		// *Уснановка выбранной страницы
		case SET_CURRENT_PAGE:
			// При нажатии на номер страницы, получает его и записывает в state
			return {
				...state,
				currentPage: action.currentPage,
			};
		// *Количество всех пользователей
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalUsersCount: action.totalCount,
			};
		// *Переключатель запроса на сервер
		case TOGGLE_IS_FETCHING:
			// Если true, значит на сервер отправлен запрос и
			// ожидается ответ. Если false, значит запрос не
			// отправлялся или уже получен
			return {
				...state,
				isFetching: action.isFetching,
			};
		// *Переключатель запроса при нажатии на кнопку follow/onfollow
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			// Если true, то добавляет userId в массив. True приходит,
			// при нажатии на кнопку, перед запросом на сервер.
			// Если userId находится в массиве, кнопка отключается
			// для данного пользователя. После того как придет ответ с
			// сервера, приходит false и userId из массива удаляется
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId),
			};
		default:
			return state;
	}
};

export default usersReducer;

// Action creators

const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
	type: SET_TOTAL_COUNT,
	totalCount,
});
export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	followingInProgress,
	userId,
});

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
