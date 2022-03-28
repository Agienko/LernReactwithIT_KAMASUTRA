import React from "react";
import styles from './UserItem.module.css'

const UserItem = props => (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <figure>
                <img 
                    src={ (props.user.photos.small !== null )
                        ? props.user.photos.small 
                        : 'https://www.pngkit.com/png/full/988-9886241_hotel-computer-icons-linkedin-native-advertising-chatbot-gloucester.png'} 
                    alt="фото" 
                    onClick={() => console.log(props.user.id)}/>
                <figcaption>
                <button onClick={() => props.handleClick(props.user.id)} >{props.user.followed ? 'Unfollow' : 'Follow'}</button>
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