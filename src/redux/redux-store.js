import { createStore, combineReducers } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';

let redusers = combineReducers({
	dialogs: dialogsReduser,
	profilePage: profileReduser,
	usersPage: usersReduser,
});

let store = createStore(redusers);

window.store = store;

export default store;
