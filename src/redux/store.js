import { createStore, combineReducers, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import messageReducer from './reducers/messageReducer'
import navBarReducer from './reducers/navBarReducer'
import profileReducer from './reducers/profileReducer'
import usersReducer from './reducers/usersReducer'
import thunkMiddleWare from 'redux-thunk'
let redusers = combineReducers({
              messagesPage: messageReducer, 
              navBarPage: navBarReducer,
              profilePage: profileReducer,
              usersPage: usersReducer,
              auth: authReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleWare))
export default store
window.store = store