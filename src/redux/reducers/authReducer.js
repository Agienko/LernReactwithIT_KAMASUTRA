import { authAPI } from "../../api/api"

export const SET_AUTH_ME = 'SET_AUTH_ME'

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_ME: 
            return {...state, ...action.data, isAuth: true};
        default: 
            return state;
    }
}

export default authReducer;

export const setAuthMe = data => ({type: SET_AUTH_ME, data})

export const getAuthMe = () => dispatch => {
    authAPI.getAuthMe().then(data =>{
        if (data.resultCode === 0) {
            dispatch(setAuthMe(data.data))
        }
    })
    
}