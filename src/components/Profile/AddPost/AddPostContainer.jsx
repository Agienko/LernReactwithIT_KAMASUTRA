import { connect } from "react-redux";
import AddPost from "./AddPost";
import {addPost, updateTextArea} from '../../../redux/reducers/profileReducer'


const mapStateToProps = state => ({profilePage: state.profilePage})
 

const AddPostContainer = connect(mapStateToProps, {addPost, updateTextArea})(AddPost)


export default AddPostContainer;