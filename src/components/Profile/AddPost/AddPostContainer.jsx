import React from "react";
import { connect } from "react-redux";
import { addPostAC, updateTextAreaAC } from "../../../redux/redusers/profileReducer";
import AddPost from "./AddPost";

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