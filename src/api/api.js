import axios from "axios"

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY' : '147a16e0-4b09-4530-83ea-5b8853a9c7fe'}
})


export const getUsers = (countOnPage, currentPage) => (
    instance.get(`users?count=${countOnPage}&page=${currentPage}`).then(response => response.data)
)
    
export const getAuthMe = () => (
   instance.get(`auth/me`).then(response => response.data)
)

export const getUserProfile = (userId) => (
    instance.get(`profile/${userId}`).then(response => response.data)
)

export const followUser = (userId) => (
    instance.post(`follow/${userId}`).then(response => response.data)
)
export const unFollowUser = (userId) => (
    instance.delete(`follow/${userId}`).then(response => response.data)
)