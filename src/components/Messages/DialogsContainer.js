import withAuthNavigate from "../hoc/withAuthNavigate";
import Dialogs from "./Dialogs";


const DialogsContainer = withAuthNavigate(Dialogs) 

export default DialogsContainer;