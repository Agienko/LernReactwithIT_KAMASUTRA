import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = props =>{
    return  (
    <header className={styles.header}>
        <img src="https://yt3.ggpht.com/a/AATXAJztFcxih4Odb4Bv1bpM0PpN73mtxrkwgse9JQ=s900-c-k-c0xffffffff-no-rj-mo" alt="logo" />
        <div className={styles.login} >
          {props.isAuth 
        ? <h4>{props.login}</h4> 
        : <Link to={'/login'}><h3>login</h3></Link>}    
        </div>
    </header>
    )
}

export default Header;