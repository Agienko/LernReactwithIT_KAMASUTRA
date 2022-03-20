const SUBSCRIBE = 'SUBSCRIBE'
const SET_USERS = 'SET_USERS'

let initialState = {
   users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state, 
                users: state.users
                    .map(user => (user.id === action.userId)
                     ? {...user, followed: !user.followed} : user)
                    }
        case SET_USERS: 
            return {
                ...state,
                users: [...action.users]
            }
        default: 
            return state;
      }  
}

export default usersReducer;


export const subscribeUserAC = userId => ({type: SUBSCRIBE, userId})
export const setUsersAC = users => ({type: SET_USERS, users})