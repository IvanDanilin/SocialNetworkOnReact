import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESSFULLY = 'INITIALIZED_SUCCESSFULLY';

const initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESSFULLY:
			return { ...state, initialized: true };
		default:
			return state;
	}
};

const initializedSuccessfully = () => ({
	type: INITIALIZED_SUCCESSFULLY,
});

export const initializeApp = () => (dispatch) => {
    const getAuthDataPromise = dispatch(getAuthUserData())
    Promise.all([getAuthDataPromise]).then(() => {
        console.log('init')
		dispatch(initializedSuccessfully());
	});
};

export default appReducer;
