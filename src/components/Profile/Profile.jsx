import React from "react";
import AddPostContainer from "./AddPost/AddPostContainer";
import Post from "./Post/Post";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
 
    return  (
      <main className={styles.main}>
        <header>
          <img src="http://images.vfl.ru/ii/1410386301/0a406f08/6292573.jpg" alt="header" />
        </header>
        <ProfileInfo />
        <AddPostContainer store={props.store}/>
      </main>
    )
}

export default Profile;