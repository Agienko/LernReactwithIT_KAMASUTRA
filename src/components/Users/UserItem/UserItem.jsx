import React from "react";
import { NavLink } from "react-router-dom";
import styles from './UserItem.module.css'
import defaultPhoto from '../../../img/defaultPhoto.png'
import axios from "axios";
const UserItem = props => (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <figure>
                <NavLink to={'/profile/' + props.user.id}>
                    <img src={ (props.user.photos.small !== null ) ? props.user.photos.small : defaultPhoto} 
                            alt="фото" 
                        // onClick={() => console.log(props.user.id)}
                    />
                </NavLink>
                <figcaption>
                
                    {props.user.followed 
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
                            withCredentials: true,
                            headers: {'API-KEY' : '147a16e0-4b09-4530-83ea-5b8853a9c7fe'}
                        }).then(response =>{
                             if (response.data.resultCode === 0)  props.unFollow(props.user.id)
                        })
                    }} >Unfollow </button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,{}, {
                            withCredentials: true,
                            headers: {'API-KEY' : '147a16e0-4b09-4530-83ea-5b8853a9c7fe'}
                        }).then(response =>{
                            if (response.data.resultCode === 0) props.follow(props.user.id)
                        })




                        
                        }} > Follow</button>}
               
                </figcaption>
            </figure>
        </div>
        <div className={styles.right}>
            <h2>{props.user.name}</h2>
            <p>{'country'}, {'sity'}</p>
            <p><em>{props.user.status}</em> </p>
        </div>
    </div>
)
export default UserItem;