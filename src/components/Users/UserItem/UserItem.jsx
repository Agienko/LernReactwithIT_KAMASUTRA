import React from "react";
import { NavLink } from "react-router-dom";
import styles from './UserItem.module.css'
import defaultPhoto from '../../../img/defaultPhoto.png'
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
                    ?   <button 
                            disabled={props.inProgress.includes(props.user.id)} 
                            onClick={() => props.unFollowUser(props.user.id)} 
                        >Unfollow </button>
                    :   <button 
                            disabled={props.inProgress.includes(props.user.id)} 
                            onClick={() => props.followUser(props.user.id)} 
                        > Follow</button>}
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