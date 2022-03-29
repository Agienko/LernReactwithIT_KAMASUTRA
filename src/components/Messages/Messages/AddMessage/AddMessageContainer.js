import AddMessage from "./AddMessage";
import { connect } from "react-redux";
import { addMessage, updateMessage } from "../../../../redux/reducers/messageReducer";

const mapStateToProps = state => ({messagesPage: state.messagesPage})

const AddMessageContainer = connect(mapStateToProps, {addMessage, updateMessage})(AddMessage)

export default AddMessageContainer;