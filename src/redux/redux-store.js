import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/app-reducer';
import authReducer from './reducers/auth-reducer';
import dialogsReducer from './reducers/dialogs-reducer';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';

// *Создание объекта с reducers, для последующей передачи их в store
let reducers = combineReducers({
	dialogs: dialogsReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
});
// store будет иметь свойство в виде объекта state, внутри которого
// будут те же свойства, что и в reducers. Каждым из этих свойств
// будет управлять определенный reducer

// *Создание store с reducers и thunkMiddleware
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// applyMiddleware добавляет промежуточное звено между store и reducers,
// в виде thunkMiddleware. В нем содержатся функции thunk, которые
// принимают в себя обычные actions и на их основе вызывают dispatch

// ! Используется для удобного просмотра. Нужно будет удалить!!!
window.store = store;

export default store;
