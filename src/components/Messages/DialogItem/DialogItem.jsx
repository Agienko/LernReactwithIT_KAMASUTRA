import React from "react";
import { NavLink } from "react-router-dom";
import styles from './DialogItem.module.css'


const DialogItem = (props) => {
return(
    <li className={styles.li}>
        <img  src={props.ava} alt="ava"/> 
        <NavLink to={/messages/ + props.id} 
        className = { navData => navData.isActive ? styles.active : styles.item } 
        >{' ' + props.name}</NavLink>
    </li>
    )
}

export default DialogItem;