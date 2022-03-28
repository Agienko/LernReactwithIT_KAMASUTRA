import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css'
import InterlocutorsContainer from "./Interlocutors/InterlocutorsContainer";
import AddMessageContainer from './Messages/AddMessage/AddMessageContainer'


const Dialogs = (props) =>{
    return  (
        <div className={styles.wrapper}>
            <header>
                <h2>DIALOGS</h2>
            </header>
            <InterlocutorsContainer />
            <AddMessageContainer/> 
        </div>
    )
}

export default Dialogs;