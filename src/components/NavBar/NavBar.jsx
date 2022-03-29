import React from "react";
import styles from './NavBar.module.css'
import NavBarItem from "./navBarItem/NavBarItem";


const NavBar = (props) =>{
  return  (
  <nav className={styles.nav}>
    <ul>
      {props.navBarPage.navBarData.map(item => <NavBarItem item={item} key={item.id}/>)}
    </ul>
    <div className={styles.wrapper}>
      <figure>
        <img src="https://avatars.mds.yandex.net/i?id=350994f26eaa722f4b90a272e26ecd23-5176143-images-thumbs&n=13" alt="ava" />
        <figcaption>erterte</figcaption>
      </figure>
      <figure>
        <img src="https://avatars.mds.yandex.net/i?id=c87a170221b588903c8b346cca6dd100-5707839-images-thumbs&n=13" alt="ava" />
        <figcaption>ertertr</figcaption>
      </figure>
      <figure>
        <img src="https://avatars.mds.yandex.net/i?id=0fc5b9ffda2a2c579773226a57ce855b-5646157-images-thumbs&n=13" alt="ava" />
        <figcaption>etert</figcaption>
      </figure>
    </div>
  </nav>
  ) 
}

export default NavBar;