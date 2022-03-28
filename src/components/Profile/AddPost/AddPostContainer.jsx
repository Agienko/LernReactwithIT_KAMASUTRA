import { connect } from "react-redux";
import AddPost from "./AddPost";
import {addPostAC, updateTextAreaAC} from '../../../redux/reducers/profileReducer'


const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hanlerClick: () => dispatch(addPostAC()),
    handlerChange: (body) => dispatch(updateTextAreaAC(body)),
  }
}


const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)


export default AddPostContainer;