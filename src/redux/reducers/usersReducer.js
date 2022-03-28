const SUBSCRIBE = 'SUBSCRIBE'
const SET_USERS = 'SET_USERS'
const SET_PAGE_NUM = 'SET_PAGE_NUM'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'

let initialState = {
   users: [],
   totalPages: 0,
   countOnPage: 10,
   currentPage: 1,
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
        case SET_PAGE_NUM: 
            return {
               ...state,
               currentPage: action.pageNum
            }    
        case SET_TOTAL_PAGES: 
            return {
               ...state,
               totalPages: Math.ceil(action.totalPages/state.countOnPage) 
            }    
        default: 
            return state;
      }  
}

export default usersReducer;

export const subscribeUserAC = userId => ({type: SUBSCRIBE, userId})
export const setUsersAC = users => ({type: SET_USERS, users})
export const setPageNumAC = pageNum => ({type: SET_PAGE_NUM, pageNum})
export const setTotalCountAC = totalPages => ({type: SET_TOTAL_PAGES, totalPages})

