import axios from "axios"

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY' : '147a16e0-4b09-4530-83ea-5b8853a9c7fe'}
})

export const authAPI ={
    getAuthMe: () => (
        instance.get(`auth/me`).then(response => response.data)
     )
}
 export const usersAPI ={
    getUsers: (countOnPage, currentPage) => (
        instance.get(`users?count=${countOnPage}&page=${currentPage}`).then(response => response.data)
    )
}
export const profileAPI ={
    getUserProfile: (userId) => (
        instance.get(`profile/${userId}`).then(response => response.data)
    )
}
export const followAPI ={
    followUser: (userId) => (
        instance.post(`follow/${userId}`).then(response => response.data)
    ),
    unFollowUser: (userId) => (
        instance.delete(`follow/${userId}`).then(response => response.data)
    )
}
