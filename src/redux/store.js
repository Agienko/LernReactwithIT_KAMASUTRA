import { createStore, combineReducers } from "redux";
import messageReducer from './redusers/messageReducer'
import navBarReducer from './redusers/navBarReducer'
import profileReducer from './redusers/profileReducer'
import usersReducer from "./redusers/usersReducer";


let redusers = combineReducers({
  messagesPage: messageReducer, 
  navBarPage: navBarReducer,
   profilePage: profileReducer,
   usersPage: usersReducer
})

let store = createStore(redusers)
export default store;
window.store = store