import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBarItem.module.css'

const NavBarItem = (props) =>{
    return  (
            <li className={styles.li}>
              <NavLink 
              className = { navData => navData.isActive ? styles.active : styles.item } 
              to={props.item.to}
              >{props.item.text}
              </NavLink>
            </li>    
    )
}

export default NavBarItem;