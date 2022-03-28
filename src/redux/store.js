import { createStore, combineReducers } from "redux";
import messageReducer from './reducers/messageReducer'
import navBarReducer from './reducers/navBarReducer'
import profileReducer from './reducers/profileReducer'
import usersReducer from "./reducers/usersReducer";


let redusers = combineReducers({
  messagesPage: messageReducer, 
  navBarPage: navBarReducer,
  profilePage: profileReducer,
  usersPage: usersReducer
})

let store = createStore(redusers)
export default store;
window.store = store