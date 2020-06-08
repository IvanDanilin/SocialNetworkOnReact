import { createStore, combineReducers } from "redux";
import dialogsReduser from "./dialogsReduser";
import myPageReduser from "./myPageReduser";

let redusers = combineReducers({
    dialogs: dialogsReduser,
    myPage: myPageReduser
});


let store = createStore(redusers);


window.store = store

export default store

