import messageReducer from "./messageReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";

let store ={
  _state: {
    navBarPage: {
        navBarData: [
            {id: 1, to: '/profile', text: 'Profile'},
            {id: 2, to: '/messages', text: 'Messages'},
            {id: 3, to: '/news', text: 'News'},
            {id: 4, to: '/music', text: 'Music'},
            {id: 5, to: '/settings', text: 'Settings'},
            {id: 6, to: '/friends', text: 'Friends'},
          ],
        navBarFriendsData:[

        ]
    },
    profilePage: {
        newPostText: '',
        postsData: [
            {id: 1, message:'Hello', likes: 3 },
            {id: 2, message:'It`s my first post', likes: 14 },
          ]
    },
    messagesPage: {
        newMessageText: '',
        dialogsData: [
            {id: 1, name: 'Andrew', ava: 'https://avatars.mds.yandex.net/i?id=350994f26eaa722f4b90a272e26ecd23-5176143-images-thumbs&n=13'},
            {id: 2, name: 'Dmitriy', ava: 'https://avatars.mds.yandex.net/i?id=c87a170221b588903c8b346cca6dd100-5707839-images-thumbs&n=13'},
            {id: 3, name: 'Sveta', ava: 'https://avatars.mds.yandex.net/i?id=a3863d37caad9303f87326aaac594681-5874987-images-thumbs&n=13'},
            {id: 4, name: 'Sasha', ava: 'https://avatars.mds.yandex.net/i?id=526a043ba583e8d38fc93b504db7e4f9-5450165-images-thumbs&n=13'},
            {id: 5, name: 'Maks', ava: 'https://avatars.mds.yandex.net/i?id=185847caf3883758a2d77890e94b9cf6-5309200-images-thumbs&n=13'},
            {id: 6, name: 'Olga', ava: 'https://avatars.mds.yandex.net/i?id=0fc5b9ffda2a2c579773226a57ce855b-5646157-images-thumbs&n=13'},
            {id: 7, name: 'Sergio', ava: 'https://avatars.mds.yandex.net/i?id=2a0000017a05d9e1f69a3b89dd44270500b9-3590262-images-thumbs&n=13'},
          ], 
          messagesData: [
            {id: 1, message: 'Hello', user: 'Andrew'},
            {id: 2, message:' Hi! How are you?', user: 'Me'},
            {id: 3, message:'I\'m fine.', user: 'Andrew'},
            {id: 4, message:'And what about you?', user: 'Andrew'},
            {id: 5, message:'I am glad to talk with you', user: 'Me'},
          ]
    },
  },
  _callSubscriber(){
    console.log('no subscribers, observers')
  },
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer
  },


  dispatch(action){
    this._state.messagesPage = messageReducer(this._state.messagesPage, action )
    this._state.navBarPage = navBarReducer(this._state.navBarPage, action )
    this._state.profilePage = profileReducer(this._state.profilePage, action )
    this._callSubscriber(this._state)
  }
}

export default store;

