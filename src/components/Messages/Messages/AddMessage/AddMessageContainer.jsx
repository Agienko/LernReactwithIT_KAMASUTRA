import React from "react";
import { addMessageAC, updateMessageAC } from "../../../../redux/redusers/messageReducer";
import AddMessage from "./AddMessage";
import { connect } from "react-redux";


const mapStateToProps = state => ({messagesPage: state.messagesPage})

const mapDispatchToProps = dispatch => {
  return {
    handlerClick: () => dispatch(addMessageAC()),
    handlerChange: (body) => dispatch(updateMessageAC(body))
  }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)




export default AddMessageContainer;