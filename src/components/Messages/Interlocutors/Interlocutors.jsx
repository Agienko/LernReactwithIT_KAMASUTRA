import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import styles from './Interlocutors.module.css'


const Interlocutors = (props) =>{
    return  (
            <ul className={styles.users}>
                {props.messagesPage.dialogsData.map(dialog => 
                    <DialogItem
                        ava ={dialog.ava}
                        id = {dialog.id} 
                        name = {dialog.name} 
                        key = {dialog.id} 
                    />)}
            </ul>
       
    )
}

export default Interlocutors;