import { connect } from "react-redux";
import Interlocutors from "./Interlocutors";

const mapStateToProps = state => ({messagesPage: state.messagesPage})

const InterlocutorsContainer = connect(mapStateToProps)(Interlocutors)

export default InterlocutorsContainer

