import { createStore, combineReducers } from "redux";
import dialogsReduser from "./dialogsReduser";
import myPageReduser from "./myPageReduser";
import usersReduser from "./usersReduser";

let redusers = combineReducers({
  dialogs: dialogsReduser,
  myPage: myPageReduser,
  usersPage: usersReduser,
});

let store = createStore(redusers);


export default store;
