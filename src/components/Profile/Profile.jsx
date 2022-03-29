import React from "react";
import AddPostContainer from "./AddPost/AddPostContainer";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from '../common/Preloader/Preloader'

const Profile = (props) =>{
  
    return  (
      <main className={styles.main}>
        <header>
          <img src="http://images.vfl.ru/ii/1410386301/0a406f08/6292573.jpg" alt="header" />
        </header>
        {props.profilePage.userProfile ? <ProfileInfo {...props.profilePage.userProfile}/> : <Preloader /> }
        
        <AddPostContainer />
      </main>
    )
}

export default Profile;