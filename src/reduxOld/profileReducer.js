// const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA'
// const ADD_POST = 'ADD-POST'

// const profileReducer = (state, action) => {
//     switch (action.type) {
//         case ADD_POST:
//             if(state.newPostText !== ''){
//                 let newId = state.postsData.length + 1
//                 let newPost = { id: newId, message: state.newPostText, likes: 0 }
//                 state.postsData.push(newPost)
//                 state.newPostText = ''
//                 }
//             return state;
//         case UPDATE_TEXT_AREA:
//             state.newPostText = action.text
//             return state;
//         default: 
//             return state;
//       }  
// }

// export default profileReducer;


// export const updateTextAreaActionCreator = text =>({type: UPDATE_TEXT_AREA, text: text})
// export const addPostActionCreator = () =>({type: ADD_POST})