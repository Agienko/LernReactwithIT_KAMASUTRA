import React from "react";
import { NavLink } from "react-router-dom";
import styles from './UserItem.module.css'
import defaultPhoto from '../../../img/defaultPhoto.png'
import { followAPI } from "../../../api/api";
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
                {console.log(props)}
                    {props.user.followed 
                    ? <button disabled={props.inProgress.some(i => i === props.user.id)} onClick={() => {
                        props.toggleInProgress(props.user.id, true)
                        followAPI.unFollowUser(props.user.id).then(data =>{
                             if (data.resultCode === 0) {
                                 props.unFollow(props.user.id)
                                 props.toggleInProgress(props.user.id, false)
                                }
                        })
                    }} >Unfollow </button>
                    : <button disabled={props.inProgress.some(i => i === props.user.id)}  onClick={() => {
                        props.toggleInProgress(props.user.id, true)
                        followAPI.followUser(props.user.id).then(data =>{
                            if (data.resultCode === 0) {
                                props.follow(props.user.id)
                                props.toggleInProgress(props.user.id, false)
                            }
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