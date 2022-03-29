const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE_NUM = 'SET_PAGE_NUM'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const IS_LOADING = 'IS_LOADING'


let initialState = {
   users: [],
   totalPages: 0,
   countOnPage: 10,
   currentPage: 1,
   isLoading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(user => (user.id === action.userId)
                        ? {...user, followed: true} : user)
                    }
        case UNFOLLOW:
            return {...state, users: state.users.map(user => (user.id === action.userId)
                        ? {...user, followed: false} : user)
                    } 
        case SET_USERS: 
            return {...state, users: [...action.users]
            }
        case SET_PAGE_NUM: 
            return {...state, currentPage: action.pageNum
            }    
        case SET_TOTAL_PAGES: 
            return {...state, totalPages: Math.ceil(action.totalPages/state.countOnPage) 
            }    
        case IS_LOADING: 
            return {...state, isLoading: action.status}    
        default: 
            return state;
      }  
}

export default usersReducer;

export const follow = userId => ({type: FOLLOW, userId})
export const unFollow = userId => ({type: UNFOLLOW, userId})
export const setUsers = users => ({type: SET_USERS, users})
export const setPageNum = pageNum => ({type: SET_PAGE_NUM, pageNum})
export const setTotalCount = totalPages => ({type: SET_TOTAL_PAGES, totalPages})
export const isLoading = status => ({type: IS_LOADING, status})

