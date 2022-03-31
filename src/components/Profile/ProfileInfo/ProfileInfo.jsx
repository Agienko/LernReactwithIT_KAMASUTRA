import React from "react";
import styles from './ProfileInfo.module.css'
import defaultPhoto from '../../../img/defaultPhoto.png'

const ProfileInfo = (props) => {
 
  return (
    <div className={styles.info}>
      <div className={styles.ava}>
        <img src={props.photos.large ? props.photos.large : defaultPhoto} alt="ava" />
      </div>
      <div className={styles.description}>
        <h3 >{props.fullName}</h3>
        <p className={styles.aboutMe}>{props.aboutMe}</p>
        <p>{props.lookingForAJob ? 'В поиске работы' : 'Не ищу работу'}</p>
        <p>Комментарий: {props.lookingForAJobDescription}</p>
        {Object.entries(props.contacts).filter(i=> i[1])
        .map(contact => 
          <p key={contact[0]}> {contact[0]}:<a target='_blank' rel="noreferrer" href={"//"+contact[1]}> <em className={styles.aboutMe}>{contact[1]}</em></a></p>)}
      </div>
    </div>
  )
  
}


export default ProfileInfo;