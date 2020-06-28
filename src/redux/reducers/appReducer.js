import { getAuthUserData } from './authReducer';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	initialized: false,
};

const { reducer, actions } = createSlice({
	name: 'app',
	initialState,
	reducers: {
		initializedSuccessfully(state, action) {
			state.initialized = action.payload;
		},
	},
});

const { initializedSuccessfully } = actions;

export const initializeApp = () => async (dispatch) => {
	await dispatch(getAuthUserData());
	dispatch(initializedSuccessfully(true));
};

export default reducer;
