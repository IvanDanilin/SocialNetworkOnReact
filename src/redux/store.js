import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import app from './reducers/appReducer';
import auth from './reducers/authReducer';
import dialogs from './reducers/dialogsReducer';
import profilePage from './reducers/profileReducer';
import usersPage from './reducers/usersReducer';

const middleware = getDefaultMiddleware({
	immutableCheck: false,
	serializableCheck: false,
	thunk: true,
});

export const store = configureStore({
	reducer: {
		dialogs,
		profilePage,
		usersPage,
		auth,
		app,
	},
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
