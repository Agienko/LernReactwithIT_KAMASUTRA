import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css'
import AddMessageContainer from './Messages/AddMessage/AddMessageContainer'


const Dialogs = (props) =>{
    return  (
        <div className={styles.wrapper}>
            <header>
                <h2>DIALOGS</h2>
            </header>
            <ul className={styles.users}>
                {props.store.getState().messagesPage.dialogsData.map(dialog => 
                    <DialogItem 
                    ava ={dialog.ava}
                    id = {dialog.id} 
                    name = {dialog.name} 
                    key = {dialog.id} />)}
            </ul>
            <AddMessageContainer
            store ={props.store}
            dispatch={props.store.dispatch}
            /> 
        </div>
    )
}

export default Dialogs;