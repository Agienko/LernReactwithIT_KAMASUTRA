// export const UPDATE_MESSAGE_TEXT_AREA = 'UPDATE-MESSAGE-TEXT-AREA'
// export const ADD_MESSAGE = 'ADD-MESSAGE'


// const messageReducer = (state, action) => {
//     switch (action.type) {
//         case ADD_MESSAGE:
//             if(state.newMessageText !== '') {
//                 let newId = state.messagesData.length + 1
//                 let newMessage = { id: newId, message: state.newMessageText, user: 'Me' }
//                 state.messagesData.push(newMessage)
//                 state.newMessageText = ''
//             }
//             return state;
//         case UPDATE_MESSAGE_TEXT_AREA: 
//             state.newMessageText = action.text
//             return state;
//         default: 
//             return state;
//       }
// }

// export default messageReducer;


// export const updateMessageActionCreator = text =>({type: UPDATE_MESSAGE_TEXT_AREA, text: text})
// export const addMessageActionCreator = () =>({type: ADD_MESSAGE})

