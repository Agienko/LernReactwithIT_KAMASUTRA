const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA'
const ADD_POST = 'ADD-POST'

let initialState = {
    newPostText: '',
    postsData: [
        {id: 1, message:'Hello', likes: 3 },
        {id: 2, message:'It`s my first post', likes: 14 },
      ]
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if(state.newPostText === '') return state;
            let newId = state.postsData.length + 1
            let newPost = { id: newId, message: state.newPostText, likes: 0 }
            return {
                    ...state, 
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                };
        case UPDATE_TEXT_AREA:
            return {...state, newPostText: action.text};
        default: 
            return state;
      }  
}

export default profileReducer;


export const updateTextArea = text =>({type: UPDATE_TEXT_AREA, text: text})
export const addPost = () =>({type: ADD_POST})