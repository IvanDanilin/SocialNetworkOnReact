import { createStore, combineReducers } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';
import authReduser from './authReduser';

let redusers = combineReducers({
	dialogs: dialogsReduser,
	profilePage: profileReduser,
	usersPage: usersReduser,
	auth: authReduser,
});

let store = createStore(redusers);

window.store = store;

export default store;
