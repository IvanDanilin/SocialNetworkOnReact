import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';
import authReduser from './authReduser';
import thunkMiddleware from 'redux-thunk';

// *Создание объекта с redusers, для последующей передачи их в store
let redusers = combineReducers({
	dialogs: dialogsReduser,
	profilePage: profileReduser,
	usersPage: usersReduser,
	auth: authReduser,
});
// store будет иметь свойство в виде объекта state, внутри которого
// будут те же свойства, что и в redusers. Каждым из этих свойств
// будет управлять определенный reduser

// *Создание store с redusers и thunkMiddleware
let store = createStore(redusers, applyMiddleware(thunkMiddleware));
// applyMiddleware добавляет промежуточное звено между store и redusers,
// в виде thunkMiddleware. В нем содержатся функции thunk, которые
// принимают в себя обычные actions и на их основе вызывают dispatch

// ! Используется для удобного просмотра. Нужно будет удалить!!!
window.store = store;

export default store;
