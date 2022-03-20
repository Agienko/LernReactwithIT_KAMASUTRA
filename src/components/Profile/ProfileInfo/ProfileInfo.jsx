import React from "react";
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
      <div className={styles.info}>
        <div className={styles.ava}>
          <img src="https://vraki.net/sites/default/files/inline/images/10_342.jpg" alt="ava" />
        </div>
        <div className={styles.description}>
          <h3 > Vladimir X</h3>
          <p> Date of Bith. 04.03.2000</p>
          <p>Sity: Stambul</p>
          <p>Education: Garvard</p>
          <p>Web-Site: www.123.com</p>
        </div>
      </div>
  )
  
}


export default ProfileInfo;