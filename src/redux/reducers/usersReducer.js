import { followAPI, usersAPI } from "../../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE_NUM = 'SET_PAGE_NUM'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const IS_LOADING = 'IS_LOADING'
const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS'

let initialState = {
   users: [],
   totalPages: 0,
   countOnPage: 10,
   currentPage: 1,
   isLoading: false,
   inProgress: []
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
            case TOGGLE_IN_PROGRESS: 
            console.log(action.toggle)
            return  action.toggle 
                    ? {...state, inProgress: [...state.inProgress, action.id]} 
                    : {...state, inProgress: state.inProgress.filter(i => i!== action.id)} 
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
export const toggleInProgress = (id, toggle) => ({type: TOGGLE_IN_PROGRESS, id, toggle})

export const getUsers = (countOnPage, currentPage) => dispatch => {
    dispatch(setPageNum(currentPage))
    dispatch(isLoading(true))
    usersAPI.getUsers(countOnPage, currentPage).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(isLoading(false))
    }) 
}
export const followUser = (id) => dispatch => {
    dispatch(toggleInProgress(id, true))
    followAPI.followUser(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(id))
            dispatch(toggleInProgress(id, false))
        }
    })
}

export const unFollowUser = id => dispatch => {
    dispatch(toggleInProgress(id, true))
    followAPI.unFollowUser(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unFollow(id))
            dispatch(toggleInProgress(id, false))
        }
    })
}
