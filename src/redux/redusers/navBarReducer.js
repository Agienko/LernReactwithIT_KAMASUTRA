
let initialState = {
    navBarData: [
        {id: 1, to: '/profile', text: 'Profile'},
        {id: 2, to: '/messages', text: 'Messages'},
        {id: 3, to: '/users', text: 'Users'},
        {id: 4, to: '/news', text: 'News'},
        {id: 5, to: '/music', text: 'Music'},
        {id: 6, to: '/settings', text: 'Settings'},
        {id: 7, to: '/friends', text: 'Friends'},
        
      ],
    navBarFriendsData:[

    ]
}


const navBarReducer = (state = initialState, action) => {
    switch (action.type) {
       
        default: 
            return state;
      }
}

export default navBarReducer;